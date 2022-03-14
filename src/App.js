import { Fragment, useEffect, useState } from 'react';

import { carregar as carregarContatos } from './services/ContactsService';

import AddContatoButton from './components/AddContatoButton';
import ListaDeContatos from './components/ListaDeContatos.jsx';
import Loader from './components/Loader.jsx';

function App() {
  const [ contatos, setContatos ] = useState([]);
  const [ carregando, setCarregando ] = useState(true);


  useEffect(() => {
    carregarContatos().then((contatos) => {
      setContatos(contatos);
      setCarregando(false);
    });
  }, []);

  const handleOnCriar = (contatos) => {
    setContatos(contatos);
  };

  if (carregando) {
    return <p>
      <Loader/>
      &nbsp;
      Carregando...
    </p>;
  }

  return (
    <Fragment>
      <AddContatoButton onCriar={handleOnCriar} />
      <ListaDeContatos contatos={contatos} />
    </Fragment>
  );
}

export default App;
