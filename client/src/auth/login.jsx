// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload= {username:username , password: password}
    console.log(payload)
    try {
      const response = await axios.post('http://localhost:8080/auth/api/login',
        payload
      );
      if (response.status === 200) {
        setToken(response.data.token);
        setError('');
        navigate('/Admin');

        console.log('Login successful! Token:', response.data.token);
      } else {
        setError('Login failed: ' + response.data.message);
      }
    } catch (error) {
      setError('Error logging in: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
        <img 
          src="https://ideogram.ai/assets/image/lossless/response/N71zWaomSkqlDrc5xSQ72w" 
          className="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5" 
          alt="Login Illustration" 
        />
        <div className="w-full sm:w-3/5">
          <div className="p-8">
            <h1 className="text-3xl font-black text-slate-700">Log in</h1>
            <p className="mt-2 mb-5 text-base leading-tight text-gray-600">If you are already registered, log in</p>
            <form className="mt-8" onSubmit={handleLogin}>
              <div className="relative mt-2 w-full">
                <input 
                  type="username" 
                  id="username"  
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" 
                  placeholder=" " 
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  required
                />
                <label 
                  htmlFor="username" 
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">
                  Enter Your username 
                </label>
              </div>
              <div className="relative mt-2 w-full">
                <input 
                  type="password" 
                  id="password" 
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" 
                  placeholder=" " 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label 
                  htmlFor="password" 
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">
                  Enter Your Password
                </label>
              </div>
              <input 
                className="mt-4 w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400" 
                type="submit" 
                value="Log in" 
              />
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {token && <p style={{ color: 'green' }}>Att ....</p>}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Don't have an account? <Link to="/register" className="font-bold text-blue-600 no-underline hover:text-blue-400">Sign up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
