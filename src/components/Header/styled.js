import styled from 'styled-components';
import { headerHeight } from '../../config/dimensions';

export const NavHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  height: ${headerHeight};
  padding: 12px;
  background-image: linear-gradient(to right bottom, rgb(0, 115, 230), rgb(0, 107, 214) 120%);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px;
  gap: 4px;
`;

export const ExpandButton = styled.div`
  button {
    text-align: center;
    font-size: 2rem;
    line-height: 1rem;
    color: white;
    display: block;
    background: rgba(0,0,0,0);
    border: none;
    padding: 4px;
    outline:0;
    border-radius: 50%;
    transform: rotate(${(props) => (props.$sidebarExpanded ? 180 : 0)}deg);
    transition: background-color 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    flex-shrink: 1;
    &:hover {
      background: rgba(0, 0, 0, 0.15)
    }
  }
`;

export const SearchInput = styled.div`
  flex-grow: 1;
  text-align: center;
  input {
    background: white;
    border: none;
    font-size: 1rem;
    border-radius: 20px;
    padding: 8px 16px;
    width: 100%;
    max-width: 540px;
    min-width: 150px;
    color: rgba(0,0,0,0.77);
  }
`;

export const UserOptionsBar = styled.div`
  display: flex;
  gap: 8px;
  padding-right: 8px;
`;

export const UserOptionsBarItem = styled.button`
  font-size: 1.2rem;
  line-height: 0.1rem;
  color: white;
  background: rgba(0,0,0,0);
  border: none;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  &:hover {
    background: rgba(0, 0, 0, 0.15)
  }
`;
