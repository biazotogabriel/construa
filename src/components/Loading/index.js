import { Modal } from '../Modal';
//import './styled.css';

export default function Loading() {
  return (
    <Modal>
      <span
        style={{
          color: 'white',
          fontSize: '1.5rem',
        }}
      >
        Carregando
      </span>
    </Modal>
  );
}
