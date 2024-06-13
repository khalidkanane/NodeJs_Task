import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate() ;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/auth/api/register', {
        username,
        password,
      });

      if (response.status === 201) {
        setSuccess('Account created successfully! Please log in.');
        setError('');
        navigate("/login")
      }
    } catch (error) {
      setError('Error creating account: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
        <img src="https://ideogram.ai/assets/image/lossless/response/N71zWaomSkqlDrc5xSQ72w" className="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5" alt="" />
        
        <div className="w-full sm:w-3/5">
          <div className="p-8">
            <h1 className="text-3xl font-black text-slate-700">Sign up</h1>
            <p className="mt-2 mb-5 text-base leading-tight text-gray-600">Create an account to get access to 1000+ Freebies</p>
            <form className="mt-8" onSubmit={handleSubmit}>
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
                <label htmlFor="username" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">Enter Your username</label>
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
                <label htmlFor="password" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">Enter Your Password</label>
              </div>
              <div className="relative mt-2 w-full">
                <input 
                  type="password" 
                  id="confirm_password" 
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" 
                  placeholder=" " 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required 
                />
                <label htmlFor="confirm_password" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">Confirm Your Password</label>
              </div>
              <button
                className="mt-4 w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400" 
                type="submit" 
                value="Create account" 
              >
                Sing up
               </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Already have an account? <Link to="/login" className="font-bold text-blue-600 no-underline hover:text-blue-400">Sign in</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
