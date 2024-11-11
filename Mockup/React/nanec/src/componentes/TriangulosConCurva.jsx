import React from 'react';

class TriangulosConCurva extends React.Component {
    render() {
        return (
            <div className="barra-encabezado1">

                <div className="izquierda">
                    <div className="triangulo"></div>
                    <div className="triangulo"></div>
                    <div className="triangulo"></div>
                </div>

                <div className="contenedor-onda">
                  <img src="k.png" alt="" />
                </div>

                <div className="derecha">
                    <div className="triangulo"></div>
                    <div className="triangulo"></div>
                    <div className="triangulo"></div>
                </div>
            </div>

        );
    }
}

export default TriangulosConCurva;
