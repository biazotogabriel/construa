import { Modal } from '../Modal';
import PropTypes from 'prop-types';
import { ModalConteiner } from './styled';
import { useEffect, useState } from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { GridButton } from '../GridButton';
import axios from '../../services/axios';
import Loading from '../Loading';
import { toast } from 'react-toastify';
import { CommonButton } from '../CommonButton';

export default function UserCad({ close, userId = -1 }) {
  const [isLoading, setIsLoading] = useState(userId > -1);
  const [isSaving, setIsSaving] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/users/${userId}`);
        const data = response.data;
        setUserName(data.userName);
        setFirstName(data.firstName);
        setLastName(data.lastName);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (userId > -1) getData();
  }, [setUserName, setFirstName, setLastName, userId]);

  const handleCloseButton = () => {
    close(false);
  };

  const handleSaveButton = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);
      if (userId === -1) {
        await axios.post('/users', {
          userName,
          firstName,
          lastName,
          password,
        });
        toast.success('Usuário cadastrado com sucesso!');
      } else {
        await axios.put('/users', {
          userId,
          userName,
          firstName,
          lastName,
          password,
        });
        toast.success('Usuário atualizado com sucesso!');
      }
      setIsSaving(false);
      close();
    } catch (e) {
      setIsSaving(false);
      const data = e.response.data;
      const errors = data.errors;
      errors.map((error) => toast.error(error));
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Modal>
          <ModalConteiner>
            <div>
              <h1>Cadastro de Usuário</h1>
              <GridButton onClick={handleCloseButton}>
                <IoCloseCircleSharp />
              </GridButton>
            </div>
            <form onSubmit={handleSaveButton}>
              <label htmlFor="userName">
                <span>Nome de Usuário</span>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
              <label htmlFor="firstName">
                <span>Primeiro Nome</span>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label htmlFor="lastName">
                <span>Segundo Nome</span>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                <span>Senha</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <CommonButton type="submit">
                {isSaving ? 'Salvando' : 'Salvar'}
              </CommonButton>
            </form>
          </ModalConteiner>
        </Modal>
      )}
    </>
  );
}

UserCad.propTypes = {
  userId: PropTypes.number.isRequired,
  close: PropTypes.func,
};
