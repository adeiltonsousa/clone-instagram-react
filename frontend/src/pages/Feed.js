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
                </article>
            </section>
        )
    }
}

export default Feed;