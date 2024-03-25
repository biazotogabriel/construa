import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import get from 'lodash/get';

import { Container } from './styled';
//import Loading from '../../Loading';
//import Modal from '../../UI/Modal';
import LabeledInput from '../../UI/common/LabeledInput';
import CommonButton from '../../UI/common/Button';
import { createUser, getUser, updateUser } from '../../../controllers/users';
import Modal from '../../UI/Modal';

export default function UserCad({ user = {}, onClose }) {
  const userId = get(user, 'userId', -1);
  const [isLoading, setIsLoading] = useState(userId !== -1);
  const [isSaving, setIsSaving] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const getData = async () => {
      const user = await getUser(userId);
      if (!user) return onClose();
      setUserName(user.userName);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setIsLoading(false);
    };
    if (userId > -1) getData();
  }, [setUserName, setFirstName, setLastName, userId, onClose, isLoading]);

  const handleSaveButtonClick = async () => {
    setIsSaving(true);
    if (
      userId === -1
        ? await createUser({
            userName,
            firstName,
            lastName,
            password,
          })
        : await updateUser({
            userId,
            userName,
            firstName,
            lastName,
            password,
          })
    ) {
      onClose(true);
    }
    setIsSaving(false);
  };

  return (
    <Modal title="Cadastro de Usuário" onClose={() => onClose(false)}>
      <Container>
        <LabeledInput
          label="Primeiro Nome"
          type="text"
          value={firstName}
          name="firstName"
          isLoading={isLoading}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <LabeledInput
          label="Segundo Nome"
          type="text"
          value={lastName}
          name="lastName"
          isLoading={isLoading}
          onChange={(e) => setLastName(e.target.value)}
        />
        <LabeledInput
          label="Nome de Usuário"
          type="text"
          value={userName}
          name="userName"
          isLoading={isLoading}
          autoComplete="off"
          onChange={(e) => setUserName(e.target.value)}
        />
        <LabeledInput
          label="Senha"
          type="password"
          value={password}
          isLoading={isLoading}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <CommonButton onClick={handleSaveButtonClick}>{isSaving ? 'Salvando' : 'Salvar'}</CommonButton>
      </Container>
    </Modal>
  );
}

UserCad.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
