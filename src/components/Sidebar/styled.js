import styled from 'styled-components';
import {
  unexpandedSidebarWidth,
  expandedSidebarWidth,
} from '../../config/dimensions';

export const NavSide = styled.div`

  background: rgb(255, 255, 255);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$sidebarExpanded ? expandedSidebarWidth : unexpandedSidebarWidth)};
  transition: width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  z-index: 1;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px;
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
  color: rgba(0, 0, 0, 0.77);

  height: 48px;
  font-size: 1rem;


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
