import PropTypes from 'prop-types';

function Accordion({ alerts }) {
  return (
    <div className="accordion">
      <div className="accordion" id="accordionExample">
        {
          alerts.map(({ id, title, description }) => (
            <div className="accordion-item" key={id}>
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="true" aria-controls={id}>
                   <strong>{ title }</strong>
                </button>
              </h2>
              <div id={id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <br />
                  { description }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

Accordion.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }))
};

export default Accordion;
