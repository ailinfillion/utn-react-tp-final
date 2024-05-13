import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        columnGap: "1em",
        margin: "1rem 0",
      }}
    >
      <NavLink
        to={"/"}
        style={({ isActive }) => (isActive ? { fontWeight: "bolder" } : null)}
      >
        Home
      </NavLink>
      <NavLink
        to={"/products"}
        style={({ isActive }) => (isActive ? { fontWeight: "bolder" } : null)}
      >
        Products
      </NavLink>
    </nav>
  );
}

export default Navbar;
