import { useState } from 'react';
import { login } from './services/api.js';

export default function Login() {
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    try {
      const result = await login(form.get('email'), form.get('password'));
      setMessage(result.message);
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Demo login</h1>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Log in</button>
      {message && <p>{message}</p>}
      <small>Test account: test@example.com / password123</small>
    </form>
  );
}
