import CardContato from './CardContato';

import './ListaDeContato.css';

function ListaDeContatos ({ contatos }) {
  if (contatos.length === 0) {
    return <p>Nenhum contato na sua agenda.</p>;
  }

  return <div className="lista-de-contatos">
    { contatos.map((c) => <CardContato key={c.id} contato={c} />) }
  </div>;
};

export default ListaDeContatos;
