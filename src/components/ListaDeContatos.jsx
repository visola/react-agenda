function ListaDeContatos ({ contatos }) {
  if (contatos.length === 0) {
    return <p>Nenhum contato na sua agenda.</p>;
  }

  return (
    <p>You have {contatos.length} contacts.</p>
  );
};

export default ListaDeContatos;
