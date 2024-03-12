import PropTypes from 'prop-types';
import { useState } from 'react';

export default function EventHandler() {
  let cliques = 0;
  const [st, setSt] = useState(0);

  const handleClick = () => {
    cliques++;
    console.log('Fui clicado!', cliques, st);
  };
  return (
    <>
      <button onClick={handleClick} className="btn btn-primary">
        Click me {cliques} {st}
      </button>
      <div className="spinner-border"></div>
      <ShowMessage message="Mensagem 1" />
      <ShowMessage message="Mensagem 2" />
      <DiferentClick
        onSmash={() => {
          console.log('On smashou');
          setSt(st + 1);
        }}
      />
      <DivWithClick>
        <ButtonWithClick value="A" />
        <ButtonWithClick value="B" />
      </DivWithClick>
    </>
  );
}

function ShowMessage({ message }) {
  return <>{message}</>;
}

function DiferentClick({ onSmash }) {
  return <button onClick={onSmash}>Clica com on Smash</button>;
}

function DivWithClick({ children }) {
  return <div onClick={() => console.log('Div!')}>{children}</div>;
}

function ButtonWithClick({ value }) {
  return <button onClick={() => console.log(value)}>{value}</button>;
}

ButtonWithClick.propTypes = {
  value: PropTypes.string.isRequired,
};

DivWithClick.propTypes = {
  children: PropTypes.element,
};

ShowMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

DiferentClick.propTypes = {
  onSmash: PropTypes.func.isRequired,
};
