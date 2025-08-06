const Botao_02 = () => { // Arrow Function (Uma variável que atribui um função)
    function handleClick(){ // Cria a função handleClick
        alert ("Você clicou no meu botão!"); // Trás uma mensagem de alerta na tela
    };
    return( // Retorna a função handleClick
        <button onClick={handleClick}> /* Quando o botão for clicado ele trás a função handleClick 
            Clique aqui
        </button>
    );
}
export default Botao_02; // Exporta a função Botao_02