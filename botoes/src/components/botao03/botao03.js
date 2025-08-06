import './botao03.css';

const Botao_03 = () =>{
    function handleClick(){
        alert("Curso de Desenvolvimento de Sistemas")
    };
    return(
        <button className="btn3" onClick={handleClick}>
            Curso 
        </button>
    );
}
export default Botao_03;