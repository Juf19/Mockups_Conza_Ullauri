import React, { Component } from 'react';
import LOGOA from 'C:/Users/JuF/Documents/GitHub/Mockups_Conza_Ullauri/Mockup/React/nanec/src/componentes/LOGOA.svg';

class ReservaCancha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deporte: '',
            cancha: '',
        };
    }

    handleDeporteChange = (event) => {
        this.setState({ deporte: event.target.value });
    };

    handleCanchaChange = (event) => {
        this.setState({ cancha: event.target.value });
    };

    handleDisponibilidad = () => {
        alert(`Verificando disponibilidad para ${this.state.deporte} en cancha ${this.state.cancha}`);
    };

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

                <div className="title">LA CAROLINA</div>

                <div className="container">
                    <div className="form">
                        <p>Seleccione en el mapa la cancha que desea reservar</p>

                        <label>FUTBOL ⚽</label>
                        <select value={this.state.deporte === 'futbol' ? this.state.cancha : ''} onChange={this.handleCanchaChange}>
                            <option value="">Seleccione cancha</option>
                            <option value="C-F1">C-F1</option>
                            <option value="C-F2">C-F2</option>
                            <option value="C-F3">C-F3</option>
                        </select>

                        <label>BASQUET 🏀</label>
                        <select value={this.state.deporte === 'basquet' ? this.state.cancha : ''} onChange={this.handleCanchaChange}>
                            <option value="">Seleccione cancha</option>
                            <option value="C-B1">C-B1</option>
                        </select>

                        <button className="disponibilidad-button" onClick={this.handleDisponibilidad}>Disponibilidad</button>
                    </div>

                    <div className="map">
                        <img src="mapa_carolina.png" alt="Mapa de la Carolina" className="map-image" />
                        <div className="cancha" style={{ top: '50%', left: '60%' }}>C-F1 ⚽</div>
                        <div className="cancha" style={{ top: '60%', left: '65%' }}>C-F2 ⚽</div>
                        <div className="cancha" style={{ top: '70%', left: '60%' }}>C-F3 ⚽</div>
                        <div className="cancha" style={{ top: '40%', left: '50%' }}>C-B1 🏀</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReservaCancha;
