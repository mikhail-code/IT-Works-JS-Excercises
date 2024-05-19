import React from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserService } from '../services/users';
import { User } from '../interfaces/user';
import { AuthContext } from '../context'; // Assuming AuthContext provides context of type T
import TopBar from '../components/TopBar';

// Define an interface for the context type provided by AuthContext
interface AuthContextType {
  login: (user: User) => void; // Assume login takes a User object as argument
}

export default function Login() {
  const { login } = useContext<AuthContextType>(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    try {
      const user = await fetchUserService(username, password);
      login(user);
      navigate('/');
    } catch (error) {
      console.error('??', error);
      setErrorMessage(error as string); 
    }
  };

  return (
    <div>
        <TopBar
    />
    <div className="container mx-auto max-w-sm p-4 mc_yellow_bg">  
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1> 
      <form onSubmit={handleSubmit} className="flex flex-col gap-2"> 
        <input type="text" placeholder="Username" name="username" className="border rounded px-3 py-2" /> 
        <input type="password" placeholder="Password" name="password" className="border rounded px-3 py-2" /> 
        <button type="submit" className="bg-red-500 text-black px-4 py-2 rounded hover:text-yellow-800">Login</button> 
      </form>
      {errorMessage ? <p className="text-red-500">{errorMessage}</p> : ''} 
      </div>
    </div>
  );
}
