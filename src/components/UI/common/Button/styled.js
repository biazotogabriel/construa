import styled from 'styled-components';
import { injectLoadingCover } from '../../../../styles/utils';

export const StyledButton = styled.button`
  align-items: center;
  position: relative;
  background: rgb(0, 115, 230);
  border: none;
  color: #fff;
  padding: 8px;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: 600;

  transition-property: filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;



  ${({ $isLoading }) => injectLoadingCover($isLoading)}

  &:hover, &:focus {
    filter: brightness(90%);
  }

`;
