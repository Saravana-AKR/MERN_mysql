import axios from 'axios';

const customFetch = axios.create({
  baseURL: '/api/crm',
});

export default customFetch;