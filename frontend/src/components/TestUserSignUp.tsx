import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const TestUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const url=`http://localhost:3000/api/signup`;
        const res=await axios.post(url,{email,password,name});
        console.log(res);

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <input type='text' id="name" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TestUser
