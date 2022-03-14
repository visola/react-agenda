import axios from 'axios';

const comparadorDeContatos = (c1, c2) => {
  return c1.nome.localeCompare(c2.nome);
};

export function carregar() {
  return axios.get('/api/contacts').then(({ data }) => {
    data.sort(comparadorDeContatos);
    return data;
  });
}

export function salvar(contato) {
  return axios.post('/api/contacts', contato).then(({ data }) => {
    data.sort(comparadorDeContatos);
    return data;
  });
}
