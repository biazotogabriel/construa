import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 3px;
  min-width: 500px;

  transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '200%')} );
  transition: transform 150ms cubic-bezier(0, 0, 0.2, 1);
`;
