export interface User {
  login: string;
  role: 'admin' | 'employee';
}

const fetchUserService = async (login: string, password: string): Promise<User | string> => {
  if (login === 'admin' && password === 'admin') {
    return { login: 'admin', role: 'admin' }; // Return actual User object
  }
  return 'Invalid username or password'; // Return rejection reason
};

export { fetchUserService };
