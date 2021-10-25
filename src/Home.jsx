import React, { useState } from 'react';
import h from './Home.module.css';
import { useDispatch } from 'react-redux';
import { login } from './app/reduxSlice';


function Home() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({
      name: name,
      password: password
    }))
  }

  return (
    <div className={h.home}>
    <h1>LOGIN</h1>
    <form onSubmit={(e) => handleSubmit(e)}>

      <div>
        <input 
        value={name} 
        type="text" 
        placeholder="name" 
        onChange={(e) => {
          setName(e.target.value)
        }} />
      </div>

      <div>
        <input 
        value={password} 
        type="text" 
        placeholder="password" 
        onChange={(e) => setPassword(e.target.value)} />
      </div>
      
      <div>
        {name === 'developer21' && password === '123456' ? 
        <button type="submit">OK</button> : 
        <button  disabled type="submit">OK</button>}
      </div>
      
    </form>
  </div>
  )
}

export default Home;
