import FullFillScreen from '../UI/FullFillScreen';

export default function Loading() {
  return (
    <FullFillScreen>
      <span
        style={{
          color: 'white',
          fontSize: '1.5rem',
          textAlign: 'center',
        }}
      >
        Carregando
      </span>
    </FullFillScreen>
  );
}
