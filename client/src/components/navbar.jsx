import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          {" "}
          <Link to="/notes">Notes</Link>
        </li>
        <li>
          {" "}
          <Link to="/register">Register</Link>
        </li>
        <li>
          {" "}
          <Link to="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
