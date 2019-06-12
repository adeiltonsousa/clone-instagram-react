const Post = require('../models/Post');
const sharp = require('sharp'); // Utilizado para redimencionar imagens

const path = require('path');
const fs = require('fs');

module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);

    },

    async store(req, res) {
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        const [name, ext] = image.split('.');
        const fileName = `${name}.jpg`; 

        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            )
        
        fs.unlinkSync(req.file.path); // Remove a imagem original 


        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        });
        
        req.io.emit('post', post) // enviar os dados de um novo post a todos os usuário
        return res.json(post);
    }
};