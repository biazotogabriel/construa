import styled from 'styled-components';

export const NavSide = styled.nav`
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$sidebarExpanded ? 240 : 64)}px;
  transition: width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  position: fixed;
  left: 0;
  top: 56px;
  bottom: 0;
  z-index: 0;
  overflow-y: auto;
  overflow-x: hidden;

  border-right: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px
`;

export const NavSideItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 8px 20px;
  cursor: pointer;

  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0.87);

  height: 3rem;
  font-size: 1rem;
  font-family: Roboto, Helvetica, Arial, sans-serif;

  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;


  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  div {
    position: relative;
    margin-left: 16px;
    display: ${(props) => (props.$sidebarExpanded ? 'block' : 'none')};
  }


`;
