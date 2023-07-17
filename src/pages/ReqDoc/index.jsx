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
  const [document, setDocument] = useState('');

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
        document,
      });
  
      setCPF('');
      setName('');
      setPhoneNumber('');
      setAlert('success');
    } catch (error) {
      setAlert('error') 
    }
    
  }

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
            <label for="exampleInputEmail1" className="form-label">Documento desejado:</label>
            <select
              class="form-select"
              aria-label="Default select example"
              defaultValue="null"
              onChange={({ target: { value } }) => setDocument(value) }
            >
              <option selected>Selecione o documento</option>
              <option value="1">Declaração de escolaridade</option>
              {/* <option value="2">Two</option>
              <option value="3">Three</option> */}
            </select>
            <div id="emailHelp" className="form-text">Selecione o documento que você deseja</div>
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
            disabled={!name || cpf.length < 14 || phoneNumber.length < 15 || !document}
          >
            Solicitar documento
          </button>
          
        </form>
        {
          alert === 'success' ? (
            <Alert
              message="Solicitação enviada com sucesso!"
              status="success"
            />
          ) : alert === 'error' && (
            <Alert
              message="Erro ao processar a solicitação. Tente novamente!"
              status="danger"
            />
          )
        }
      </div>
    </>
  )
}

export default ReqDoc;
