// Criar um conversor de temperaturas de Celsius, Kelvin e Fahrenheit
import React, { useState } from "react";

function Temp() {
    const [mostrarCelsius, setMostrarCelsius] = useState(false);
    const [mostrarKelvin, setMostrarKelvin] = useState(false);
    const [mostrarFah, setMostrarFahrenheit] = useState(false);

    const [celsius, setCelsius] = useState('');
    const [kelvin, setKelvin] = useState('');
    const [fahren, setFahrenheit] = useState('');
    const [conversao, setConversao] = useState(null);

    const calculoConversao = () => {
        const c = parseFloat(celsius);
        const k = parseFloat(kelvin);
        const f = parseFloat(fahren);

        if (!isNaN(c) && mostrarKelvin) {
            setConversao((c + 273.15).toFixed(2) + " K");
        } else if (!isNaN(c) && mostrarFah) {
            setConversao(((c * 9 / 5) + 32).toFixed(2) + " °F");
        } else if (!isNaN(k) && mostrarCelsius) {
            setConversao((k - 273.15).toFixed(2) + " °C");
        } else if (!isNaN(k) && mostrarFah) {
            setConversao((((k - 273.15) * 9 / 5) + 32).toFixed(2) + "°F");
        } else if (!isNaN(f) && mostrarCelsius) {
            setConversao(((f - 32) * 5 / 9).toFixed(2) + " °C");
        } else if (!isNaN(f) && mostrarKelvin) {
            setConversao((((f - 32) * 5 / 9) + 273.15).toFixed(2) + "°K");
        } else {
            alert("Selecione pelo menos uma temperatura e insira um valor válido.");
        }
    };

    return (
        <div>
            <h2>Conversão de Temperaturas</h2>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={mostrarCelsius}
                        onChange={() => setMostrarCelsius(!mostrarCelsius)}
                    />
                    Celsius
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={mostrarKelvin}
                        onChange={() => setMostrarKelvin(!mostrarKelvin)}
                    />
                    Kelvin
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={mostrarFah}
                        onChange={() => setMostrarFahrenheit(!mostrarFah)}
                    />
                    Fahrenheit
                </label>
            </div>

            <hr />

            {mostrarCelsius && (
                <div>
                    <input
                        type="number"
                        placeholder="Digite Celsius"
                        value={celsius}
                        onChange={(e) => setCelsius(e.target.value)}
                    />
                </div>
            )}

            {mostrarKelvin && (
                <div>
                    <input
                        type="number"
                        placeholder="Digite Kelvin"
                        value={kelvin}
                        onChange={(e) => setKelvin(e.target.value)}
                    />
                </div>
            )}

            {mostrarFah && (
                <div>
                    <input
                        type="number"
                        placeholder="Digite Fahrenheit"
                        value={fahren}
                        onChange={(e) => setFahrenheit(e.target.value)}
                    />
                </div>
            )}

            <button onClick={calculoConversao}>Converter</button>

            {conversao && <h3>Resultado: {conversao}</h3>}
        </div>
    );
}

export default Temp;
