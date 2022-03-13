import axios from 'axios';

export function load () {
  return axios.get('/api/contacts').then(({ data }) => data);
}
