const Post = require('../models/Post');

module.exports = {
    async store(req, res) {
        const post = await Post.findById(req.params.id);

        post.likes += 1;

        await post.save();

        req.io.emit('like', post) // enviar os dados de um novo like a todos os usuário

        return res.json(post);
    }
};