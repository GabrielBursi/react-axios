import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import blogFetch from "../axios.config";
import { v4 as uuidv4 } from "uuid";

import './styles/newPost.css'

function NewPostPage() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    const navigate = useNavigate()

    async function createPost(e){
        e.preventDefault();

        if(title === '' || body === '') return  

        const post = { title, body, id: uuidv4() };
        await blogFetch.post('/posts', {
            body: post
        })
        navigate('/')
    }

    return (
        <div className="new-post">
            <h2>Create a new Post:</h2>
            <form onSubmit={createPost}>
                <div className="form-control">
                    <label htmlFor="title">Title:</label>
                    <input type='text' name="title" id="title" placeholder="Write here" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="body">Content:</label>
                    <textarea name="body" id="body" placeholder="Write the content"  onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <button>Create Post</button>
            </form>
        </div>
    );
}

export default NewPostPage;