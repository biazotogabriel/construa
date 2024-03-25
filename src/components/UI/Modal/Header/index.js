import PropTypes from 'prop-types';
import { Container } from './styled';
import CloseIconButton from '../../common/IconButton/CloseIconButton';

export default function ModalHeader({ title, onClose }) {
  return (
    <Container>
      <h1>{title}</h1>
      {onClose && <CloseIconButton onClick={onClose} />}
    </Container>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};
