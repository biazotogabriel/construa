import styled from 'styled-components';

export const ModalConteiner = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 3px;
  min-width: 500px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 10px 0;
    margin-bottom: 10px;

    h1 {
      font-size: 1.2rem;
      color: rgba(0,0,0,0.77)
    }
  }

  form {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    color: rgba(0,0,0,0.77);

    label{
      padding: 8px 0;
      display: flex;
      flex-direction: column;
      font-size: 0.7rem;

      input{
        color: rgba(0,0,0,0.77);
        box-sizing: border-box;
        padding: 8px;
        min-width: 300px;
        border: none;
        box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.15);

        transition-property: box-shadow;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.15s;

        &:focus {
          box-shadow: 0px 3px 0px 0px rgb(0, 115, 230);

        }
      }
    }
  }
`;
