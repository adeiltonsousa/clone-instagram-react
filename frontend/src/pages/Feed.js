import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Adeilton Xavier</span>
                            <span className="place">Campina Grande</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3333/files/senac.jpg" alt="" />

                    <footer>
                        <div className="action" >
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong>1313 Curtidas</strong>

                        <p>
                            Imagem da MPP em Campina Grande - Paraíba
                            <span>#mapp #uepb #maiorsaojoaodomundo</span>
                        </p>
                    </footer>
                </article>
                <article>
                    <header>
                        <div className="user-info">
                            <span>Adeilton Xavier</span>
                            <span className="place">Campina Grande</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3333/files/senac.jpg" alt="" />

                    <footer>
                        <div className="action" >
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong>1313 Curtidas</strong>

                        <p>
                            Imagem da MPP em Campina Grande - Paraíba
                            <span>#mapp #uepb #maiorsaojoaodomundo</span>
                        </p>
                    </footer>
                </article>
            </section>
        )
    }
}

export default Feed;