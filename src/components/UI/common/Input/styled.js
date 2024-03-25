import styled from 'styled-components';

export const StyledInput = styled.input`
  color: rgba(0,0,0,0.77);
  box-sizing: border-box;
  padding: 6px;
  min-width: 300px;
  border: none;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.15);
  width: 100%;

  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:focus {
    box-shadow: 0px 3px 0px 0px rgb(0, 115, 230);
  }
`;
