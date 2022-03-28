import { useState } from 'react';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './CardContato.css';

import ModalEditarContato from './ModalEditarContato';

function CardContato ({ contato, onSalvo = () => {} }) {
  const [ editandoContato, setEditandoContato ] = useState(false);
  
  const handleClick = () => {
    setEditandoContato(true);
  };

  const handleFechar = () => {
    setEditandoContato(false);
  };

  const handleSalvar = (contatos) => {
    setEditandoContato(false);
    onSalvo(contatos);
  };

  return <div className="card-contato" onClick={handleClick}>
    <h2>{ contato.nome }</h2>
    <p>
      <FontAwesomeIcon icon={faPhone} />
      { contato.telefone }
    </p>
    <p>
      { contato.id }
    </p>
    <p>
      <FontAwesomeIcon icon={faEnvelope} />
      { contato.email }
    </p>
    <ModalEditarContato
      contato={contato}
      onFechar={handleFechar}
      onSalvar={handleSalvar}
      visivel={editandoContato}
    />
  </div>;
};
  
export default CardContato;
