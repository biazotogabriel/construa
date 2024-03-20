import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  font-size: 1.3rem;
  color: rgba(0,0,0,0.77);
  align-items: center;
  display:flex;
  padding: 2px;
  margin: 2px;
  border-radius: 3px;

  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:hover {
    background: rgba(0,0,0,0.15)
  }

`;
