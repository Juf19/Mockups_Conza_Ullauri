import React, { Component } from 'react';

class ItemHeader extends Component {
    render() {
        return (
            <div className="app">
                <header className="header">
                    <img src="LOGOA.svg" alt="Quito" className="logo" />
                    <div className="search-bar">
                        <input type="text" placeholder="Buscar" />
                        <button className="search-button">🔍</button>
                    </div>
                    <div className="menu">
                        <div className="menu-item">
                            <img src="file.png" alt="Reserva" className="icono" />
                            <button className="menu-text">Reservas</button>
                        </div>
                        <div className="menu-item">
                            <img src="file2.png" alt="Perfil" className="icono" />
                            <button className="menu-text">Perfil</button>
                        </div>
                    </div>

                </header>
            </div>
        );
    }
}
export default ItemHeader;