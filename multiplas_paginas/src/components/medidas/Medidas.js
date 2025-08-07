// Conversão entre km, m, cm
import React, { useState } from "react";

function Medidas() {
    const [de, setDe] = useState('');
    const [para, setPara] = useState('');
    const [valor, setValor] = useState('');
    const [conversao, setConversao] = useState(null);

    const converterMedidas = () => {
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

        const unidades = {
            "km": 1000000,
            "m": 1000,
            "cm": 10,
            "mm": 1
        };

        if (unidades[de] && unidades[para]) {
            resultado = (v * unidades[de]) / unidades[para];
            setConversao(`${resultado} ${para}`);
        } else {
            setConversao("Conversão inválida.");
        }
    };

    return (
        <div>
            <h2>Conversão de Medidas</h2>

            <div>
                <label>De: </label>
                <select value={de} onChange={(e) => setDe(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="km">Quilômetro</option>
                    <option value="m">Metro</option>
                    <option value="cm">Centímetro</option>
                    <option value="mm">Milímetro</option>
                </select>
            </div>

            <div>
                <label>Para: </label>
                <select value={para} onChange={(e) => setPara(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="km">Quilômetro</option>
                    <option value="m">Metro</option>
                    <option value="cm">Centímetro</option>
                    <option value="mm">Milímetro</option>
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

            <button onClick={converterMedidas}>Converter</button>

            {conversao && <h3>Resultado: {conversao}</h3>}
        </div>
    );
}

export default Medidas;
