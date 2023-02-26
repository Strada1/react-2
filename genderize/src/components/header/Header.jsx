import './Header.css';

function Header({ parameters: { text, className } }) {
  return (
    <header>
      <h1 className={className}>{text}</h1>
    </header>
  );
}

export default Header;
