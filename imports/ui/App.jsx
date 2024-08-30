import React, { useState } from 'react';

const Login = ({ setIsLoggedIn, setUser }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({
      name: "Khanghh",
      email: "Khanghh@titops.com"
    });
  };

  return <button onClick={handleLogin}>Login with TrustID</button>;
};

const Dashboard = ({ isLoggedIn, user, handleLogout }) => (
  <div>
    {isLoggedIn ? (
      <>
        <h2>Welcome, {user.name}</h2>
        <button onClick={handleLogout}>Logout</button>
      </>
    ) : (
      <p>Please log in.</p>
    )}
  </div>
);

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div>
      <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
      <Dashboard isLoggedIn={isLoggedIn} user={user} handleLogout={handleLogout} />
    </div>
  );
};
