import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>
            <h1>Señorita Tequila</h1>
        </div>
      </Link>
    </nav>
  );
}

export default Header;