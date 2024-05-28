
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { User } from './interfaces/user'
import AuthProvider from './context'; 

import HomePage from './pages/home'
import AuthentificationPage from './pages/authentification'

import {
  EmployeeProvider,
} from './context/EmployeeContext';

interface AuthContextType {
  user: User | null; 
  isAuthenticated: boolean; 

  login: (user: User) => void; 
  logout: () => void; 
}

function App<T extends AuthContextType>() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EmployeeProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthentificationPage />} />
          </Routes>
        </EmployeeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}


export default App
