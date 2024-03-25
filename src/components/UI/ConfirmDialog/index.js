import PropTypes from 'prop-types';
import Modal from '../Modal';
import { Container, OptionsContainer } from './styled';
import CommonButton from '../common/Button';

export default function ConfirmDialog({ title, message, onYes, onNo, onClose }) {
  return (
    <Modal title={title} onClose={() => onClose(false)}>
      <Container>
        {message}
        <OptionsContainer>
          <CommonButton onClick={onYes}>Sim</CommonButton>
          <CommonButton onClick={onNo}>Não</CommonButton>
        </OptionsContainer>
      </Container>
    </Modal>
  );
}

ConfirmDialog.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onYes: PropTypes.func.isRequired,
  onNo: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
