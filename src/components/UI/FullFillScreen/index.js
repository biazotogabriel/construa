import PropTypes from 'prop-types';
import { Container } from './styled';
import { useEffect, useState } from 'react';

export default function FullFillScreen({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);

    return () => {
      setIsOpen(false);
    };
  }, [isOpen]);
  return <Container $isOpen={isOpen}>{children}</Container>;
}

FullFillScreen.propTypes = {
  children: PropTypes.element,
};
