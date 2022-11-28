import React, { useState,useEffect } from 'react';

import axios from 'axios'
import { Link } from 'react-router-dom';

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
        <>
            {posts.length === 0 ? (<p>Carregando...</p>) : (posts.map(post => (
                <div className='post' key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/posts/${post.id}`} className='btn'>Read more</Link>
                </div>
            )))}
        </>
    );
}

export default HomePage;