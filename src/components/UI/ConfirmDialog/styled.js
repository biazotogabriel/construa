import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  color: rgba(0,0,0,0.77)
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  width: 100%;
  justify-content: center;

  button{
    flex: 1;
  }
`;
