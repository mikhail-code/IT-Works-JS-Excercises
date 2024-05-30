import React from 'react';

function LoginForm() {
  return (
    <form className="flex flex-col items-center gap-2">
      <h2 className="text-xl font-medium mb-4">Login</h2>
      <div className="w-64">
        <label className="block text-sm font-medium mb-2" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="w-64">
        <label className="block text-sm font-medium mb-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-64 px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
