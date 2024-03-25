import styled, { css } from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  width: 100%;
  position: relative;


  ${({ $isLoading }) =>
    $isLoading
      ? css`
      border-radius: 4px;
      overflow: hidden;

      &::before {
        content: '.';
        position: absolute;
        color: #aaa;
        width: 400%;
        height: 100%;
        background-image: linear-gradient(100deg, rgba(240,240,240,1) 46%, rgba(250,250,250,1) 50%, rgba(240,240,240,1) 54%);
        animation: bright-animation 3s linear infinite;
        animation-delay: Math.random() * 2s;
      }`
      : css`
      border-radius: 0;

  `}

  @keyframes bright-animation {
        0% {
          transform: translateX(-75%)
        }
        100% {
          transform: translateX(0%)
        }
      }
`;

console.log(Math.random());
