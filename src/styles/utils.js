import { css } from 'styled-components';

export const injectLoadingCover = (isLoading) => {
  return isLoading
    ? css`
      border-radius: 4px;
      overflow: hidden;
      background: #fff;
      cursor: default;

      &::before {
        content: '.';
        position: absolute;
        color: rgba(240,240,240,1);
        width: 400%;
        left: 0;
        top: 0;
        bottom: 0;
        background-image: linear-gradient(100deg, rgba(240,240,240,1) 46%, rgba(250,250,250,1) 50%, rgba(240,240,240,1) 54%);
        animation: bright-animation 3s linear infinite;
      }

      @keyframes bright-animation {
        0% {
          transform: translateX(-75%)
        }
        100% {
          transform: translateX(0%)
        }
      }`
    : css`

    `;
};
