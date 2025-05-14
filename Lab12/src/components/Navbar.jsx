import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee', display: 'flex', gap: '1rem' }}>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}
