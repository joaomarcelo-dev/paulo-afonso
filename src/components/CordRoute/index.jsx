import { Link } from 'react-router-dom';
import './style.scss';
import PropTypes from 'prop-types';

function CardRoute({ icon, title, link, disabled, animation }) {
  return (
    <Link to={ link } className={
        `link 
        ${disabled ? 'disabled' : ''}
        ${animation ? 'animation' : ''}
        `
      }>
      <div
        className="cards-routs flex-row"
      >
        <span>
          { icon }
        </span>
        
        <span>
          { title }
        </span>
      </div>
    </Link>
  )
}

CardRoute.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  link: PropTypes.string,
  disabled: PropTypes.bool,
  animation: PropTypes.bool,
}

export default CardRoute;
