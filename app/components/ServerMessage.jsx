'use client';

import { useState } from 'react';

export default function ServerMessage() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleClick() {
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/message');

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h2>Server message</h2>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Load server message'}
      </button>

      {message && <p>{message}</p>}
      {error && <p className="error">Error: {error}</p>}
    </div>
  );
}