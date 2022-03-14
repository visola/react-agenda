import { useState } from 'react';
import './Letras.css';

function geraListaDeLetras(contatos) {
  const letras = [];
  contatos.forEach((c) => {
    const letra = c.nome.charAt(0).toUpperCase();
    if (letras.includes(letra)) {
      return;
    }

    letras.push(letra);
  })
  letras.sort();

  return letras;
}

function Letra({ letra, onClick = () => {}, selecionada }) {
  return (
    <li
      className={ letra === selecionada ? 'selected' : ''}
      onClick={() => onClick(letra)}
    >
      {letra}
    </li>
  )
}

function Todos({ onClick = () => {}, selecionada }) {
  return (
    <li
      className={ selecionada ? '' : 'selected'}
      onClick={() => onClick(null)}
    >
      Todos
    </li>
  );
}

function Letras({ contatos, onSelecaoAlterada = () => {} }) {
  const [ selecionada, setSelecionada ] = useState();

  if (contatos.length === 0) {
    return null;
  }

  const letras = geraListaDeLetras(contatos);
  
  const handleSelecionar = (letra) => {
    setSelecionada(letra);
    onSelecaoAlterada(letra);
  };

  return <ul className="letras">
    <Todos onClick={handleSelecionar} selecionada={selecionada} />
    {letras.map((l) => <Letra key={l} letra={l} onClick={handleSelecionar} selecionada={selecionada} />)}
  </ul>;
};

export default Letras;
