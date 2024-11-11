import React, { Component } from 'react';
import './App.css';
import Tr from './componentes/Tr';
import TriangulosConCurva from './componentes/TriangulosConCurva';
import LoginBox from './componentes/LoginBox';





class App extends Component {
  render() {
    return (
      <div className="App">
        <Tr></Tr>
        <TriangulosConCurva></TriangulosConCurva>
        <LoginBox></LoginBox>
      </div>

    );
  }
}

export default App;
