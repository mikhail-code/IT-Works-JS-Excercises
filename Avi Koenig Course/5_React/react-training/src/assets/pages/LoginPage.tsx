import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
  username: string;
  password: string;
}

function LoginPage({ setIsLoggedIn }: { setIsLoggedIn: (value: boolean) => void }) {
  const [formData, setFormData] = useState<LoginForm>({ username: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.username === 'Bob' && formData.password === '12345') {
      setIsLoggedIn(true);
      console.log('Valid credentials');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
