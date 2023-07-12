import './style.scss'
import { BiUserCircle } from 'react-icons/bi'

function Header() {
  return (
    <header className="flex-row">
      <img
        src="./img/logo-santa-ines.png"
        alt="Logo"
        className="logo-santa-ines"
      />
      <nav>
        <ul>
          <li>
            <BiUserCircle size={30} color="rgb(204, 254, 184)" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
