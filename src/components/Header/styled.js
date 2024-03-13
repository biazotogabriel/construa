import styled from 'styled-components';

export const NavHeader = styled.header`
  padding: 20px;
  background: #1F95F6;
  height: 56px;
  width: 100%;
  position: fixed;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px;
  //border-bottom: 1px solid;
  nav {
    display: flex;
    gap: 5px;

    div {
    background: turquoise;
    }

    button {
      background: turquoise;
    }
  }


`;
