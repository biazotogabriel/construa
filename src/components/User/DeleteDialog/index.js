import PropTypes from 'prop-types';
import ConfirmDialog from '../../UI/ConfirmDialog';
import { useState } from 'react';
import { deleteUser } from '../../../controllers/users';

export default function UserDeleteDialog({ user, onClose }) {
  const { userId, userName } = user;
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteUserButtonClick = async () => {
    setIsDeleting(true);
    if (await deleteUser(userId)) {
      onClose(true);
    } else {
      onClose();
    }
    setIsDeleting(false);
  };

  return (
    <ConfirmDialog
      title="Confirmação"
      message={isDeleting ? `Deletando "${userName}"` : `Deseja realmente deletar o usuário "${userName}"?`}
      onYes={handleDeleteUserButtonClick}
      onNo={() => onClose(false)}
      onClose={() => onClose(false)}
    />
  );
}

UserDeleteDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
