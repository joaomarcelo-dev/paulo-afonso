import Header from "../../components/Header";
import './style.scss'
import { GrCircleAlert } from 'react-icons/gr';
import Accordion from "../../components/Accordion";
import { useSelector } from "react-redux";


function Alerts() {
  const alerts = useSelector((store) => store.data.alerts)

  return (
    <>
      <Header />
      <div className="container-alerts">
        <section className="section-alerts">
        <h3 className="flex-row">
            Avisos
            <span>
              <GrCircleAlert color="red" />
            </span>
          </h3>
          <p>Está pagina lhe oferece as informações gerais e avisos presentes na escola.</p>

          <Accordion alerts={ alerts } />
        </section>
      </div>
    </>
  )
}

export default Alerts;
