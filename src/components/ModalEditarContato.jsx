import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

import Loader from './Loader.jsx';

import { salvar as salvarContato } from '../services/ContactsService';

function ModalEditarContato({
  contato = { email: '', nome: '', telefone: ''},
  onFechar = () => {},
  onSalvar = () => {},
  visivel = false,
}) {
  const [ email, setEmail ] = useState(contato.email);
  const [ nome, setNome ] = useState(contato.nome);
  const [ telefone, setTelefone ] = useState(contato.telefone);
  const [ salvando, setSalvando ] = useState(false);

  const handleSalvar = (e) => {
    e.preventDefault();
    if (salvando) {
      return;
    }

    setSalvando(true);
    const paraSalvar = {
      ...contato,
      nome,
      email,
      telefone,
    };

    salvarContato(paraSalvar).then((contatos) => {
      setEmail('');
      setNome('');
      setTelefone('');
      setSalvando(false);
      onSalvar(contatos);
    });
  };

  return <div className="modal fade show" tabIndex="-1" style={{ display: visivel ? 'block' : 'none' }}>
    <form onSubmit={handleSalvar}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{contato.id ? 'Editar' : 'Criar'} Contato</h5>
            <button className="btn-close" onClick={onFechar} type="button"></button>
          </div>
          <div className="modal-body">
            <div className="form-inline">
              <label htmlFor="nome">Nome</label>
              <input
                className="form-control"
                id="nome"
                placeholder="João da Silva"
                type="text"
                onChange={(e) => setNome(e.target.value)}
                value={nome}
              />
            </div>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faPhone} /></span>
              <input
                type="text"
                className="form-control"
                id="nome"
                placeholder="(11) 54321-1234"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></span>
              <input
                type="text"
                className="form-control"
                id="nome"
                placeholder="algum@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" type="submit">
              { salvando ? <Loader type='white' /> : 'Salvar' }
            </button>
            <button className="btn btn-secondary" onClick={onFechar} type="button">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>;
};

export default ModalEditarContato;
