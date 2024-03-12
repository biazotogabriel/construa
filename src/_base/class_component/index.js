import { Component } from 'react';

export default class Main extends Component {
  state = {
    stateA: '',
    stateB: [],
    stateC: -1,
  };

  componentDidMount() {
    console.log();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Atualiza', prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log('Desmonta');
  }

  render() {
    const { stateA, stateB } = this.state;

    return (
      <>
        <h1>função que renderizará o o cmponente</h1>
        {stateA}
        {stateB}
      </>
    );
  }
}
