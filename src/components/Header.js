function Header({ setSearchTerm }) {
  return (
    <header>
      <h1>
        Plantsy
        <span className="logo" role="img" aria-label="seedling emoji">
          🌱
        </span>
      </h1>
      <input
        type="text"
        placeholder="Search plants..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </header>
  );
}

export default Header;