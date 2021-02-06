import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <Container className="App">
      <h1>калькулятор стоимости конструкций</h1>
      <br />
        <Counter />
    </Container>
  );
}

export default App;
