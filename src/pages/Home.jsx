import React, { useState,useEffect } from 'react';

import axios from 'axios'
import { Link } from 'react-router-dom';

import './styles/home.css'

function HomePage() {

    const [posts, setPosts] = useState([]);

    async function getPosts(){
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const data = res.data
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <main>
        <h2>Últimos posts</h2>
            {posts.length === 0 ? (<p>Carregando...</p>) : (posts.map(post => (
                <div className='post' key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <Link to={`/posts/${post.id}`} className='btn'>Read more</Link>
                </div>
            )))}
        </main>
    );
}

export default HomePage;