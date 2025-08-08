import React, { useState } from "react";

function Numeric() {
    const [modo, setModo] = useState(''); // "decimal" ou "binario"
    const [valor, setValor] = useState('');
    const [conversao, setConversao] = useState(null);

    const calcularConversao = () => {
        if (modo === 'decimal') {
            const d = parseInt(valor, 10);
            if (!isNaN(d)) {
                setConversao(`${d} em binário é ${d.toString(2)}`);
            } else {
                setConversao("Número decimal inválido.");
            }
        } else if (modo === 'binario') {
            const b = parseInt(valor, 2);
            if (!isNaN(b)) {
                setConversao(`${valor} em decimal é ${b}`);
            } else {
                setConversao("Número binário inválido.");
            }
        } else {
            setConversao("Selecione o tipo de conversão.");
        }
    };

    return (
        <div>
            <h2>Conversão de Decimal e Binário</h2>

            <div>
                <label>
                    <input
                        type="radio"
                        name="modo"
                        value="decimal"
                        checked={modo === 'decimal'}
                        onChange={() => {
                            setModo('decimal');
                            setValor('');
                            setConversao(null);
                        }}
                    />
                    Decimal → Binário
                </label>

                <label>
                    <input
                        type="radio"
                        name="modo"
                        value="binario"
                        checked={modo === 'binario'}
                        onChange={() => {
                            setModo('binario');
                            setValor('');
                            setConversao(null);
                        }}
                    />
                    Binário → Decimal
                </label>
            </div>

        <br></br>

            {modo && (
                <div>
                    <input
                        type="text"
                        placeholder={`Digite o valor em ${modo}`}
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />
                </div>
            )}
        <br/>
            <button onClick={calcularConversao}>Converter</button>

            {conversao && <h3>Resultado: {conversao}</h3>}
        </div>
    );
}

export default Numeric;
