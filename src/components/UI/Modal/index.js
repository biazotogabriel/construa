import PropTypes from 'prop-types';
import FullFillScreen from '../FullFillScreen';
import { Container } from './styled';
import { useEffect, useState } from 'react';
import ModalHeader from './Header';

export default function Modal({ children, title, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    return () => {
      setIsOpen(false);
    };
  }, [isOpen]);

  return (
    <>
      <FullFillScreen>
        <Container $isOpen={isOpen}>
          <ModalHeader title={title} onClose={onClose} />
          {children}
        </Container>
      </FullFillScreen>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  onClose: PropTypes.func,
};
