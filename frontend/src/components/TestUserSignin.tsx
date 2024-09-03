import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const TestUserSignin = () => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const url=`http://localhost:3000/api/signin`;
        const res=await axios.post(url,{email,password});
        console.log(res);
        localStorage.setItem('token',res.data.token);

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TestUserSignin
