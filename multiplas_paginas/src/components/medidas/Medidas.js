// Criar um conversor de temperaturas de Km, m, cm e mm
import React, { useState } from "react";

function Medidas() {
    const [mostrarKm, setMostrarKM] = useState(false);
    const [mostrarMetro, setMostrarMetro] = useState(false);
    const [mostrarCenti, setMostrarCenti] = useState(false);
    

    const [kilometro, setKM] = useState('');
    const [metro, setMetro] = useState('');
    const [centimetro, setCenti] = useState('');
    const [conversao, setConversao] = useState(null);

    const calculoConversao = () => {
        const k = parseFloat(kilometro);
        const m = parseFloat(metro);
        const c = parseFloat(centimetro);

        if(!isNaN(k) && mostrarMetro){
            setConversao((k * 1000) + "m");
        } else if (!isNaN(k) && mostrarCenti){
            setConversao((k * 100000) + "cm");
        } else if (!isNaN(m) && mostrarKm){
            setConversao((m / 1000) + "km");
        } else if (!isNaN(m) && mostrarCenti){
            setConversao((m * 100) + "cm");
        } else if (!isNaN(c) && mostrarKm){
            setConversao((c / 100000) + "km");
        } else if (!isNaN(c) && mostrarMetro){
            setConversao((c / 100) + "m");
        } else{
            alert ("Por favor, digite um valor válido")
        }

    };

    return (
        <div>
            <h2>Conversão de Temperaturas</h2>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={mostrarKm}
                        onChange={() => setMostrarKM(!mostrarKm)}
                    />
                    Kilometro
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={mostrarMetro}
                        onChange={() => setMostrarMetro(!mostrarMetro)}
                    />
                    Metro
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={mostrarCenti}
                        onChange={() => setMostrarCenti(!mostrarCenti)}
                    />
                    Centimetro
                </label>
            </div>

            <hr />

            {mostrarKm && (
                <div>
                    <input
                        type="number"
                        placeholder="Digite Kilometro"
                        value={kilometro}
                        onChange={(e) => setKM(e.target.value)}
                    />
                </div>
            )}

            {mostrarMetro && (
                <div>
                    <input
                        type="number"
                        placeholder="Digite Metro"
                        value={metro}
                        onChange={(e) => setMetro(e.target.value)}
                    />
                </div>
            )}

            {mostrarCenti && (
                <div>
                    <input
                        type="number"
                        placeholder="Digite Centimetro"
                        value={centimetro}
                        onChange={(e) => setCenti(e.target.value)}
                    />
                </div>
            )}

            <button onClick={calculoConversao}>Converter</button>

            {conversao && <h3>Resultado: {conversao}</h3>}
        </div>
    );
}

export default Medidas;
