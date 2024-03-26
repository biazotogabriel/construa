import PropTypes from 'prop-types';
import FullFillScreen from '../FullFillScreen';
import { Container } from './styled';
import { useEffect, useRef, useState } from 'react';
import ModalHeader from './Header';

export default function Modal({ children, title, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const firstElementRef = useRef(null);
  const lastElementRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll('input, button, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElementRef.current = firstElement;
    lastElementRef.current = lastElement;

    function handleKeyDown(event) {
      if (event.key === 'Tab') {
        if (document.activeElement === lastElementRef.current && !event.shiftKey) {
          event.preventDefault();
          firstElementRef.current.focus();
        } else if (document.activeElement === firstElementRef.current && event.shiftKey) {
          event.preventDefault();
          lastElementRef.current.focus();
        }
      }
    }

    modal.addEventListener('keydown', handleKeyDown);
    setIsOpen(true);
    return () => {
      setIsOpen(false);
      modal.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <FullFillScreen>
        <Container $isOpen={isOpen} ref={modalRef}>
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
