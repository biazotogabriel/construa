import styled from 'styled-components';
import { injectLoadingCover } from '../../../../styles/utils';

export const StyledInput = styled.div`
  display: flex;
  position: relative;
  width: 100%;


  ${({ $isLoading }) => injectLoadingCover($isLoading)}

  &>input{
    border: none;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.15);
    width: 100%;
    color: rgba(0,0,0,0.77);
    box-sizing: border-box;
    padding: 6px;
    min-width: 300px;

    transition-property: box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;

    &:focus {
    box-shadow: 0px 3px 0px 0px rgb(0, 115, 230);
    }

  }
`;
