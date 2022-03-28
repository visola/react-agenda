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
  if (contato.id) {
    return axios.put(`/api/contacts/${contato.id}`, contato).then(({ data }) => {
      data.sort(comparadorDeContatos);
      return data;
    });
  }

  return axios.post('/api/contacts', contato).then(({ data }) => {
    data.sort(comparadorDeContatos);
    return data;
  });
}
