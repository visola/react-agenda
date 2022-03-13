import { Fragment, useEffect, useState } from 'react';

import { load } from './services/ContactsService';

import ListaDeContatos from './components/ListaDeContatos.jsx';

function App() {
  const [ contatos, setContatos ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    load()
      .then((contatos) => {
        setContatos(contatos);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Fragment>
      <ListaDeContatos contatos={contatos} />
    </Fragment>
  );
}

export default App;
