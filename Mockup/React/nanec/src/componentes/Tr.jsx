import React from 'react';


class Tr extends React.Component {
    render() {
        return (
            <div className="barra-encabezado">
               
                    <div className="izquierda">
                        <div className="triangulo"></div>
                        <div className="triangulo"></div>
                        <div className="triangulo"></div>
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

export default Tr;
