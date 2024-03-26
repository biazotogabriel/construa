import styled from 'styled-components';
import { injectLoadingCover } from '../../../../styles/utils';

export const StyledLabel = styled.label`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 0.7rem;
  position: relative;

  span{
    display: flex;
    position: relative;
    margin-bottom: 5px;
    padding: 2px;

    ${({ $isLoading }) => injectLoadingCover($isLoading)}
  }


`;

console.log(Math.random());
