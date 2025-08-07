import React, { useState } from 'react';
function MediaProvas() {
    // Definindo estados para armazenar os valores das três notas e da média
    const [nota1, setNota1] = useState(''); // Nota 1
    const [nota2, setNota2] = useState(''); // Nota 1
    const [nota3, setNota3] = useState(''); // Nota 1
    const [media, setMedia] = useState(null); // Média calculada

    // Função para calcular a média
    const calcularMedia = () => {
        // Convertendo as notas para números decimais
        const num1 = parseFloat(nota1);
        const num2 = parseFloat(nota2);
        const num3 = parseFloat(nota3);

        // Verificando se os valores inseridos são válidos
        if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
            // Calculando a média das três notas
            const resultado = (num1 + num2 + num3) / 3;
            setMedia(resultado.toFixed(2)); // Armazenando o resultado com duas casas decimais
        } else {
            alert("Por favor, insira valores válidos")
        }
    };
    return (
        <div>
            <h2>Calculadora de Média</h2>
            {/* Camop de entrada para a Nota 1 */}
            <div>
                <input type='number'
                    placeholder='Nota 1'
                    value={nota1}
                    // Atualiza o estado de nota1
                    onChange={(e) => setNota1(e.target.value)}
                />
            </div>
            {/*Campo de entrada para a Nota 2*/}
            <div>
                <input type='number'
                    placeholder='Nota 2'
                    value={nota2}
                    // Atualiza o estado da nota2
                    onChange={(e) => setNota2(e.target.value)}
                />
            </div>
            {/* Caampo de entrada para a Nota 3*/}
            <div>
                <input type='number'
                    placeholder='Nota 3'
                    value={nota3}
                    // Atualiza o estado da nota3
                    onChange={(e) => setNota3(e.target.value)}
                /><br></br>
                {/* Botão para calcular a média */}
                <button onClick={calcularMedia}>Calcular Média</button>

                {/* Exibe o resultado da média, caso tenha sido calculado */}
                {media && <h3>Média: {media}</h3>}
            </div>
        </div>
    );
}

export default MediaProvas;
