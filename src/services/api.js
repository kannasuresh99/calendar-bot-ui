import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-api.com',
});

export const sendMessage = (message) => {
  return api.post('/send-message', { text: message });
};
