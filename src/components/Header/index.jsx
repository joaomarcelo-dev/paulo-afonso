import { Link } from 'react-router-dom';
import './style.scss'
import { BiUserCircle } from 'react-icons/bi'

function Header() {
  return (
    <header className="flex-row">
      <Link to="/">
        <img
          src="../img/logo-santa-ines.png"
          alt="Logo"
          className="logo-santa-ines"
        />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/login">
              <BiUserCircle size={30} color="rgb(204, 254, 184)" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
