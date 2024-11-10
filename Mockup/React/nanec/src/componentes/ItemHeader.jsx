import React, { Component } from 'react';
import LOGOA from 'C:/Users/JuF/Documents/GitHub/Mockups_Conza_Ullauri/Mockup/React/nanec/src/componentes/LOGOA.svg';
import file from 'C:/Users/JuF/Documents/GitHub/Mockups_Conza_Ullauri/Mockup/React/nanec/src/componentes/file.png';
import file2 from 'C:/Users/JuF/Documents/GitHub/Mockups_Conza_Ullauri/Mockup/React/nanec/src/componentes/file2.png';

class ItemHeader extends Component {
    render() {
        return (
            <div className="app">
                <header className="header">
                    <img src={LOGOA} alt="Quito" className="logo" />
                    <div className="search-bar">
                        <input type="text" placeholder="Buscar" />
                        <button className="search-button">🔍</button>
                    </div>
                    <div className="menu">
                        <div className="menu-item">
                            <img src={file} alt="Reserva" className="icono" />
                            <button className="menu-text">Reservas</button>
                        </div>
                        <div className="menu-item">
                            <img src={file2} alt="Perfil" className="icono" />
                            <button className="menu-text">Perfil</button>
                        </div>
                    </div>

                </header>
            </div>
        );
    }
}
export default ItemHeader;