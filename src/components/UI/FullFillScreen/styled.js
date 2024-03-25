import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.5);

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 125ms cubic-bezier(0, 0, 0.2, 1);
`;
