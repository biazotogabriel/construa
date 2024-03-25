import PropTypes from 'prop-types';
import ConfirmDialog from '../../UI/ConfirmDialog';
import axios from '../../../services/axios';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function UserDeleteDialog({ user, onClose }) {
  const { userId, userName } = user;
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteUser = async () => {
    try {
      setIsDeleting(true);
      await axios.delete('/users', {
        data: {
          userId,
        },
      });
      onClose(true);
      toast.success(`Usuário "${userName}" deletado com sucesso`);
    } catch (e) {
      const data = e.response.data;
      const errors = data.errors;
      errors.map((error) => toast.error(error));
      onClose();
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <ConfirmDialog
      title="Confirmação"
      message={isDeleting ? `Deletando "${userName}"` : `Deseja realmente deletar o usuário "${userName}"?`}
      onYes={deleteUser}
      onNo={() => onClose(false)}
      onClose={() => onClose(false)}
    />
  );
}

UserDeleteDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
