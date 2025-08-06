import './botao02.css';
const Botao_02 = () =>{
    function handleClick(){
        alert("Técnico em Informática")
    };
    return(
        <button className='btn' onClick={handleClick}>
            Técnico
        </button>
    );
}
export default Botao_02;