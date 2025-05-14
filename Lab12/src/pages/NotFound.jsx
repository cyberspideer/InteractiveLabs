import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops!</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

