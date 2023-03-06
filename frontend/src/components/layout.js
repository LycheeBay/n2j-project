import { Outlet, Link } from "react-router-dom";
import SearchBar from "./SearchBar.js";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/apts">Apartments</Link>
          </li>
          <li>
            <Link to="/myapts">My Apartments</Link>
          </li>
          <li>
            <Link to="/newapt">Add Apartment</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/logout">Log Out</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <SearchBar placeholder="Search for an apartment" />
    </>
  );
};

export default Layout;
