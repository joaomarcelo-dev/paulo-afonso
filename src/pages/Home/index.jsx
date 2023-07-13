import CardRoute from '../../components/CordRoute';
import Header from '../../components/Header';
import { FiAlertTriangle } from "react-icons/fi";
import { BsFillFileEarmarkPersonFill, BsCalendar3, BsClock } from "react-icons/bs";
import { FiImage } from "react-icons/fi";
import { MdEditDocument } from 'react-icons/md';

import './style.scss'
import { useEffect, useState } from 'react';
import localSt from '../../utils/localSorage';
import data from '../../../back-end.json';
import ListEmployer from '../../components/ListEmployer';
import { useSelector } from 'react-redux';

function Home() {
  const [animation, setAnimation] = useState(false);
  const alerts = useSelector((store) => store.data.alerts)

  useEffect(() => {
    document.title = 'Home'
    const countAlerts = localSt.getItem('countsAlerts');

    const setLocalSt = () => localSt.setItem('countsAlerts', alerts.length);

    if (countAlerts === null) {
      setLocalSt();
    }

    if (countAlerts < alerts.length) {
      setAnimation(true);
      setLocalSt();
    }

  }, [alerts])

  return (
    <>
      <Header />
      <div className="container-home">
        <section className="section-links">

          <h3>Informações gerais:</h3>

          <div className="container-cards">
            <CardRoute
              icon={<FiAlertTriangle color='red' size={30} />}
              title="Avisos"
              link="alerts"
              animation={animation}
            />

            <CardRoute
              icon={<BsFillFileEarmarkPersonFill color="rgb(30, 85, 204)" size={30} />}
              title="Dados do aluno"
              link="#"
              disabled
            />

            <CardRoute
              icon={<FiImage color="rgb(30, 85, 204)" size={30} />}
              title="Fotos de Eventos"
              link="#"
              disabled
            />

            <CardRoute
              icon={<BsCalendar3 color="rgb(30, 85, 204)" size={30} />}
              title="Calendario escolar"
              link="calendar"
              disabled
            />

            <CardRoute
              icon={<BsClock color="rgb(30, 85, 204)" size={30} />}
              title="Horário de aulas"
              link="#"
              disabled
            />

            <CardRoute
              icon={<MdEditDocument color="rgb(30, 85, 204)" size={30} />}
              title="Solicitar documentos"
              link="/request-document"
              // disabled
            />
          </div>
        </section>
        {/* <section className="employees-list">
          <h3>Lista de funcionairios:</h3>

          <div className="content-list-employees">
            {
              data['employees'].map(({
                id,
                name,
                office,
                photo,
                age,
                email,
                telephone
              }) => (
                <ListEmployer
                  key={id}
                  name={name}
                  office={office}
                  photo={photo}
                  age={age}
                  email={email}
                  telephone={telephone}
                  link={`/employees/${id}`}
                />
              ))
            }
          </div>
        </section> */}
      </div>
    </>
  )
}

export default Home;
