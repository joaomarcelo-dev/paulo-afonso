import { Link } from 'react-router-dom';
import './style.scss';
import PropTypes from 'prop-types';

function ListEmployer({
  photo,
  name,
  office,
  link

}) {
  return (
    <Link to={ link }>
      <div className="content-employer-list flex-row">
        <img src={ photo } alt={ name } />

        <div className="employer-info">
          <h5>{ name }</h5>
          <p>{ office }</p>
        </div>
      </div>
    </Link>
  );
}

ListEmployer.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  office: PropTypes.string.isRequired,
  link: PropTypes.string.isRequireds
}

export default ListEmployer;
