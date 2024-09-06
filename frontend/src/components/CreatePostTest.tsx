import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const CreatePostTest = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const url=`http://localhost:3000/post/createpost`;
        const token=localStorage.getItem('token');
        try {
            const res = await axios.post(url, {title, description}, { 
                headers: {
                    Authorization: `Bearer ${token}`, 
                }
            });
            console.log(res);
        } catch (error) {
            
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" id="description" name="description" placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default CreatePostTest
