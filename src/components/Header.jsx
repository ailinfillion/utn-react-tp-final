function Header({ children }) {
  return (
    <header style={{ height: "140px" }}>
      <h1 style={{ textAlign: "center" }}>My Store</h1>
      {children}
    </header>
  );
}
export default Header;
