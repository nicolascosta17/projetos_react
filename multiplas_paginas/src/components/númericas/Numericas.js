import React, { useState } from "react";

function Numeric() {
    const [mostrarDecimal, setMostrarDecimal] = useState(false);
    const [mostrarBinario, setMostrarBinario] = useState(false);

    const [decimal, setDecimal] = useState('');
    const [binario, setBinario] = useState('');
    const [conversao, setConversao] = useState(null);

    const calculoConversao = () => {
        if (mostrarDecimal && decimal !== '') {
            const d = parseInt(decimal, 10);
            if (!isNaN(d)) {
                const bin = d.toString(2); // Decimal → Binário
                setConversao(`${d} em binário é ${bin}`);
            } else {
                setConversao("Número decimal inválido.");
            }
        } else if (mostrarBinario && binario !== '') {
            const b = parseInt(binario, 2);
            if (!isNaN(b)) {
                setConversao(`${binario} em decimal é ${b}`); // Binário → Decimal
            } else {
                setConversao("Número binário inválido.");
            }
        } else {
            setConversao("Preencha um valor para converter.");
        }
    };

    return (
        <div>
            <h2>Conversão de Decimal e Binário</h2>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={mostrarDecimal}
                        onChange={() => {
                            setMostrarDecimal(!mostrarDecimal);
                            setMostrarBinario(false); // desmarca outro
                            setConversao(null);
                            setDecimal('');
                            setBinario('');
                        }}
                    />
                    Decimal → Binário
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={mostrarBinario}
                        onChange={() => {
                            setMostrarBinario(!mostrarBinario);
                            setMostrarDecimal(false); // desmarca outro
                            setConversao(null);
                            setDecimal('');
                            setBinario('');
                        }}
                    />
                    Binário → Decimal
                </label>
            </div>

            <hr />

            {mostrarDecimal && (
                <div>
                    <input
                        type="number"
                        placeholder="Digite Decimal"
                        value={decimal}
                        onChange={(e) => setDecimal(e.target.value)}
                    />
                </div>
            )}

            {mostrarBinario && (
                <div>
                    <input
                        type="text"
                        placeholder="Digite Binário"
                        value={binario}
                        onChange={(e) => setBinario(e.target.value)}
                    />
                </div>
            )}

            <button onClick={calculoConversao}>Converter</button>

            {conversao && <h3>Resultado: {conversao}</h3>}
        </div>
    );
}

export default Numeric;
