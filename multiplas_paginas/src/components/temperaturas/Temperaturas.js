// Conversão entre Celsius, Kelvin e Fahrenheit
import React, { useState } from "react";
import './Temperaturas.css';

function Temp() {
    const [de, setDe] = useState('');
    const [para, setPara] = useState('');
    const [valor, setValor] = useState('');
    const [conversao, setConversao] = useState(null);

    const converterTemperatura = () => {
        const v = parseFloat(valor);

        if (isNaN(v)) {
            alert("Digite um valor válido.");
            return;
        }

        if (de === para) {
            setConversao(`${v} ${para}`);
            return;
        }

        let resultado;

        if (de === 'Celsius') {
            if (para === 'Kelvin') resultado = v + 273.15;
            else if (para === 'Fahrenheit') resultado = (v * 9/5) + 32;
        } else if (de === 'Kelvin') {
            if (para === 'Celsius') resultado = v - 273.15;
            else if (para === 'Fahrenheit') resultado = (v - 273.15) * 9/5 + 32;
        } else if (de === 'Fahrenheit') {
            if (para === 'Celsius') resultado = (v - 32) * 5/9;
            else if (para === 'Kelvin') resultado = (v - 32) * 5/9 + 273.15;
        }

        if (resultado !== undefined) {
            setConversao(`${resultado.toFixed(2)} ${para}`);
        } else {
            setConversao("Conversão inválida.");
        }
    };

    return (
        <div>
            <h2>Conversão de Temperaturas</h2>

            <div>
                <label>De: </label>
                <select value={de} onChange={(e) => setDe(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="Celsius">Celsius</option>
                    <option value="Kelvin">Kelvin</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                </select>
            </div>

            <div>
                <label>Para: </label>
                <select value={para} onChange={(e) => setPara(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="Celsius">Celsius</option>
                    <option value="Kelvin">Kelvin</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                </select>
            </div>

            <div>
                <input
                    type="number"
                    placeholder="Digite o valor"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />
            </div>

            <button onClick={converterTemperatura}>Converter</button>

            {conversao && <h3>Resultado: {conversao}</h3>}
        </div>
    );
}

export default Temp;
