import React, { Component } from 'react';
import LOGOA from 'C:/Users/JuF/Documents/GitHub/Mockups_Conza_Ullauri/Mockup/React/nanec/src/componentes/LOGOA.svg';

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
                        <button>Reservas</button>
                        <button>Perfil</button>
                    </div>
                </header>
            </div>
        );
    }
}
export default ItemHeader;