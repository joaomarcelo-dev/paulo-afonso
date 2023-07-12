import Header from "../../components/Header";
import './style.scss'
import { GrCircleAlert } from 'react-icons/gr';
import data from '../../../back-end.json';
import Accordion from "../../components/Accordion";

function Alerts() {
  return (
    <>
      <Header />
      <div className="container-alerts">
        <section className="section-alerts">
        <h3 className="flex-row">
            Avisos
            <span>
              <GrCircleAlert color='white' />
            </span>
          </h3>

          <Accordion alerts={data['alerts-school']} />
        </section>
      </div>
    </>
  )
}

export default Alerts;
