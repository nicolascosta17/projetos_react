const Botao_02 = () => { // Arrow Function
    function handleClick(){
        alert ("Você clicou no meu botão!");
    };
    return(
        <button onClick={handleClick}>
            Clique aqui
        </button>
    );
}
export default Botao_02