import { toast } from 'react-toastify';
import axios from '../services/axios';

export const getLegalEntities = async () => {
  try {
    const response = await axios.get('/legalEntities');
    return response.data;
  } catch (error) {
    toast.error('Erro ao buscar pessoas jurídicas');
  }
};

export const getLegalEntity = async (legalEntityId) => {
  try {
    const response = await axios.get(`/legalEntities/${legalEntityId}`);
    return response.data;
  } catch (error) {
    toast.error('Erro ao buscar dados de pessoas jurídicas');
  }
};

export const createLegalEntity = async (legalEntity) => {
  try {
    await axios.post('/legalEntities', legalEntity);
    toast.success('Pessoa Jurídica cadastrada com sucesso!');
    return true;
  } catch (e) {
    const data = e.response.data;
    const errors = data.errors;
    errors.map((error) => toast.error(error));
    return false;
  }
};

export const updateLegalEntity = async (legalEntity) => {
  try {
    await axios.put('/legalEntities', legalEntity);
    toast.success('Pessoa Jurídica atualizada com sucesso!');
    return true;
  } catch (e) {
    const data = e.response.data;
    const errors = data.errors;
    errors.map((error) => toast.error(error));
    return false;
  }
};

export const deleteLegalEntity = async (legalEntityId) => {
  try {
    await axios.delete('/legalEntities', { data: { legalEntityId } });
    toast.success(`Pessoa Jurídica deletada com sucesso`);
    return true;
  } catch (e) {
    const data = e.response.data;
    const errors = data.errors;
    errors.map((error) => toast.error(error));
    return false;
  }
};
