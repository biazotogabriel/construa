import { toast } from 'react-toastify';
import axios from '../services/axios';

export const getUsers = async () => {
  try {
    const response = await axios.get(`/users`);
    return response.data;
  } catch (e) {
    toast.error('Erro ao buscar usuários');
  }
};

export const getUser = async (userId) => {
  try {
    const response = await axios.get(`/users/${userId}`);
    return response.data;
  } catch (e) {
    toast.error('Erro ao buscar dados do usuário');
  }
};

export const createUser = async (user) => {
  try {
    await axios.post('/users', user);
    toast.success('Usuário cadastrado com sucesso!');
    return true;
  } catch (e) {
    const data = e.response.data;
    const errors = data.errors;
    errors.map((error) => toast.error(error));
    return false;
  }
};

export const updateUser = async (user) => {
  try {
    await axios.put('/users', user);
    toast.success('Usuário atualizado com sucesso!');
    return true;
  } catch (e) {
    const data = e.response.data;
    const errors = data.errors;
    errors.map((error) => toast.error(error));
    return false;
  }
};
