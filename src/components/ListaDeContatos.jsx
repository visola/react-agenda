import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import CardContato from './CardContato';
import Letras from './Letras';

import './ListaDeContato.css';

function ListaDeContatos ({ contatos, onSalvo = () => {} }) {
  const [ filtrados, setFiltrados ] = useState([]);

  useEffect(() => {
    filtrarContatosComecandoCom(null);
  }, [contatos]);

  if (contatos.length === 0) {
    return <p>Nenhum contato na sua agenda.</p>;
  }

  const filtrarContatosComecandoCom = (letra) => {
    setFiltrados(contatos.filter((c) => {
      if (!letra) {
        return true;
      }

      return c.nome.toUpperCase().startsWith(letra);
    }));
  }

  const handleOnSelecaoAlterada = (letra) => {
    filtrarContatosComecandoCom(letra);
  }

  const handleContatoSalvo = (contatos) => {
    onSalvo(contatos);
  }

  return <Fragment>
    <Letras contatos={contatos} onSelecaoAlterada={handleOnSelecaoAlterada} />
    <div className="lista-de-contatos">
      { filtrados.map((c) => <CardContato key={c.id} contato={c} onSalvo={handleContatoSalvo} />) }
    </div>
  </Fragment>;
};

export default ListaDeContatos;
