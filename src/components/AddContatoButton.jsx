import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faUser } from '@fortawesome/free-solid-svg-icons';

import ModalEditarContato from './ModalEditarContato';

function AddContatoButton({ onCriar = () => {} }) {
  const [ editandoContato, setEditandoContato ] = useState(false);

  const handleCriarNovo = () => setEditandoContato(true);
  const handleFechar = () => setEditandoContato(false);

  const handleSalvar = (contato) => {
    setEditandoContato(false);
    onCriar(contato);
  };

  return <Fragment>
    <button className="btn btn-primary" onClick={handleCriarNovo}>
      <FontAwesomeIcon icon={faCirclePlus} />
      &nbsp;
      <FontAwesomeIcon icon={faUser} />
    </button>
    <ModalEditarContato onFechar={handleFechar} onSalvar={handleSalvar} visivel={editandoContato} />
  </Fragment>;
}

export default AddContatoButton;
