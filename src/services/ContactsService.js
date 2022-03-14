import axios from 'axios';

export function carregar() {
  return axios.get('/api/contacts').then(({ data }) => data);
}

export function salvar(contato) {
  return axios.post('/api/contacts', contato).then(({ data }) => data);
}
