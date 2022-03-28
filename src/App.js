import { Fragment, useEffect, useState } from 'react';

import { carregar as carregarContatos } from './services/ContactsService';

import AddContatoButton from './components/AddContatoButton';
import ListaDeContatos from './components/ListaDeContatos.jsx';
import Loader from './components/Loader.jsx';
import CaixaDeBusca from './components/CaixaDeBusca';

function App() {
  const [ contatos, setContatos ] = useState([]);
  const [ carregando, setCarregando ] = useState(true);
  const [ filtrados, setFiltrados ] = useState([]);

  const filtrarContatos = (filtro) => {
    setFiltrados(contatos.filter((c) => {
      if (!filtro || filtro === '') {
        return true;
      }

      return c.nome.toLowerCase().includes(filtro) ||
        c.telefone.includes(filtro) ||
        c.email.includes(filtro);
    }))
  };

  useEffect(() => {
    carregarContatos().then((contatos) => {
      setContatos(contatos);
      setCarregando(false);
    });
  }, []);

  useEffect(() => {
    filtrarContatos(null);
  }, [contatos]);

  const handleContatoSalvo = (contatos) => {
    setContatos(contatos);
  };

  const handleBuscaChanged = (novaBusca) => {
    filtrarContatos(novaBusca);
  }

  if (carregando) {
    return <p>
      <Loader/>
      &nbsp;
      Carregando...
    </p>;
  }

  return (
    <Fragment>
      <div className="top-bar">
        <AddContatoButton onCriar={handleContatoSalvo} />
        <CaixaDeBusca onChange={handleBuscaChanged} />
      </div>
      <ListaDeContatos contatos={filtrados} onSalvo={handleContatoSalvo} />
    </Fragment>
  );
}

export default App;
