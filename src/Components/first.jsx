import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Details:', { email, password });
    alert('Login successful!');
  };

  return (
    <div></div>
  );
}

export default Login;