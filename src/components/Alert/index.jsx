import { Link } from 'react-router-dom';
import './style.scss'

function Alert({ status, message }) {
  return (
    <div className="content-alert-message">
      <div className={`alert alert-${status}`} role="alert">
        { message }
      </div>
      <Link to="/" className="link-return">
        Retornar para o inicio
      </Link>
    </div>
  )
}

export default Alert;
