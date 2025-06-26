import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <img
        src="/src/Images/chef-claude-icon.png"
        alt="Chef Claude Icon"
        className="header-logo"
      />
      <div className="header-content">
        <h1 className="header-title">Chef Claude</h1>
        <p className="header-subtitle">Your AI Cooking Assistant 🍳</p>
      </div>
    </header>
  );
}