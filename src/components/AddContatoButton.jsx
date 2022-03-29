import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faUser } from '@fortawesome/free-solid-svg-icons';

import ModalEditarContato from './ModalEditarContato';

function AddContatoButton({ onCriar = () => {} }) {
  const [ criandoContato, setCriandoContato ] = useState(false);

  const handleCriarNovo = () => setCriandoContato(true);
  const handleFechar = () => setCriandoContato(false);

  const handleSalvar = (contatos) => {
    setCriandoContato(false);
    onCriar(contatos);
  };

  return <Fragment>
    <button className="btn btn-primary" onClick={handleCriarNovo}>
      <FontAwesomeIcon icon={faCirclePlus} />
      &nbsp;
      <FontAwesomeIcon icon={faUser} />
    </button>
    <ModalEditarContato
      onFechar={handleFechar}
      onSalvar={handleSalvar}
      visivel={criandoContato}
    />
  </Fragment>;
}

export default AddContatoButton;
