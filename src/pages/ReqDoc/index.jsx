import { useState } from "react";
import Header from "../../components/Header";

import { formatPhoneNumber, formatCPF } from "../../utils/formatNumbers";

import './style.scss';
import requestServer from "../../utils/getServer";
import useFetch from "../../hooks/useFetch";
import Alert from "../../components/Alert";

function ReqDoc() {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [alert, setAlert] = useState('');

  const handleCPFChange = (event) => {
    const { value } = event.target;
    if (value.length > 14) return;
    const formattedCPF = formatCPF(value);
    setCPF(formattedCPF);
    
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    if (value.length > 15) return;
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await requestServer('post-req-document', {
        name,
        cpf,
        phone: phoneNumber,
      });
  
      setCPF('');
      setName('');
      setPhoneNumber('');
      setAlert('success');
    } catch (error) {
      setAlert('error') 
    }
    
  }

  fetch('https://backendschool.vercel.app/get-alerts', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  })
  .then((response) => response.json())
  .then((data) => console.log(data));
  

  return (
    <>
      <Header />
      <div className="content-request-doc">
        <h3>Requesição de documentos</h3>

        <p>
          Nesta página você pode realizar as solicitações de 
          documentos escolares como por exemplo: Histórico escolar,
          declaração de matrícula, declaração de vínculo, entre outros.
        </p>
        <form
          className="form-request-doc"
          onSubmit={(e) => {handleSubmit(e)}}
        >
          <div className="mb-4">
            <label for="exampleInputEmail1" className="form-label">Nome do aluno:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => {handleNameChange(e)}}
            />
            <div id="emailHelp" className="form-text">Vireifique se o nome está correto.</div>
          </div>

          <div className="mb-4">
            <label for="exampleInputPassword1" className="form-label">CPF do responsavel:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={cpf}
              placeholder="000.000.000-00"
              onChange={(e) => {handleCPFChange(e)}}
            />
            <div id="emailHelp" className="form-text">Verifique se o seu CPF está correto</div>
          </div>

          <div className="mb-4">
            <label for="exampleInputPassword1" className="form-label">Numero de telefone:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={phoneNumber}
              placeholder="(98) 98100-0000"
              onChange={(e) => {handlePhoneNumberChange(e)}}
            />
            <div id="emailHelp" className="form-text">Confira se seu numero está no formato correto!</div>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">Sou o responsavel</label>
          </div>
          
          <div id="emailHelp" className="form-text info-submit"><p>Para ativar preencha todos os campos acima!</p></div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!name || cpf.length < 14 || phoneNumber.length < 15}
          >
            Solicitar documento
          </button>
          
        </form>
        {
          alert === 'success' && (
            <Alert
              message="Solicitação enviada com sucesso!"
              status="success"
            />
          )
        }
      </div>
    </>
  )
}

export default ReqDoc;
