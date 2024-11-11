import React from "react";
import './App2.css';
import ItemHeader from './componentes/ItemHeader';
import ListaParques from "./componentes/ListaParques";

class App extends React.Component {
  render (){
    return (
      <div className="App">
        <ItemHeader></ItemHeader>
        <ListaParques></ListaParques>
      </div>
    
    );
   }
  } 

export default App;
