import React from 'react';

function HomePage({ userLogin }: { userLogin: string }) {
  return (
    <div className="home-page">
      <h1>Welcome, {userLogin}!</h1>
    </div>
  );
}

export default HomePage;
