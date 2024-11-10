
import './App.css';
import React from "react";
//import ItemRestaurante from './componentes/itemRestaurante';
import ItemHeader from './componentes/ItemHeader';

/*const restaurantes=[{nombre: "Restaurante", tipo: "tradicional", horario: "12:00 - 13:00", img:"https://www.eluniverso.com/resizer/v2/QSEP36JJINARHAWMPQL6VVP5NQ.jpg?auth=0a320930e9df5c511d9122917b36f25737e5f08ea71d460ae106dfc7fb7d0d64&width=1005&height=670&quality=75&smart=true"},
  {nombre: "Restaurante Pepito", tipo: "parrillada", horario: "12:00 - 13:00"},
  {nombre: "Restaurante Fabiola", tipo: "tradicional", horario: "12:00 - 13:00"}
]*/
class App extends React.Component {
  render (){
    return (
      <div className="App">
        <ItemHeader></ItemHeader>
      </div>
      /*<div className="App">
      <h1>Bienvenido ñanec</h1>
      {this.state.restaurantes.map((rest, index)=> (<ItemRestaurante key = {index} nombre = {rest.nombre} tipo={rest.tipo} horario = {rest.horario}></ItemRestaurante>))}
      
      <button onClick={this.insertarNuevo}>Insertar nuevo</button>
      </div>*/
      
    );
   }
    
   /*insertarNuevo = ()=>{
     //  restaurantes.push({nombre:"comedor", tipo:"peruana", horario:"14-20"})
       //const nuevaLista = [...restaurantes]
       //nuevaLista.push({nombre:"comedor", tipo:"peruana", horario:"14-20"})
       this.setState(prevState => ( {restaurantes: [...prevState.restaurantes, {nombre:"comedor", tipo:"peruana", horario:"14-20"} ]}))
        restaurantes.forEach((r)=> console.log(r));
      
   }*/

   /*constructor (props){
    super(props);
    this.state = {restaurantes: [{nombre: "Restaurante", tipo: "tradicional", horario: "12:00 - 13:00",img:"https://www.eluniverso.com/resizer/v2/QSEP36JJINARHAWMPQL6VVP5NQ.jpg?auth=0a320930e9df5c511d9122917b36f25737e5f08ea71d460ae106dfc7fb7d0d64&width=1005&height=670&quality=75&smart=true"},
      {nombre: "Restaurante Pepito", tipo: "parrillada", horario: "12:00 - 13:00"},
      {nombre: "Restaurante Fabiola", tipo: "tradicional", horario: "12:00 - 13:00"}
    ]}
   }*/

  }

export default App;
