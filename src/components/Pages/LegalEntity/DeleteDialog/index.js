import PropTypes from 'prop-types';
import ConfirmDialog from '../../../UI/ConfirmDialog';
import { useState } from 'react';
import { deleteLegalEntity } from '../../../../controllers/legalEntity';

export default function LegalEntityDeleteDialog({ legalEntity, onClose }) {
  const { legalEntityId, document } = legalEntity;
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteLegalEntityButtonClick = async () => {
    setIsDeleting(true);
    if (await deleteLegalEntity(legalEntityId)) {
      onClose(true);
    } else {
      onClose();
    }
    setIsDeleting(false);
  };

  return (
    <ConfirmDialog
      title="Confirmação"
      message={isDeleting ? `Deletando "${document}"` : `Deseja realmente deletar o usuário "${document}"?`}
      onYes={handleDeleteLegalEntityButtonClick}
      onNo={() => onClose(false)}
      onClose={() => onClose(false)}
    />
  );
}

LegalEntityDeleteDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  legalEntity: PropTypes.object.isRequired,
};
