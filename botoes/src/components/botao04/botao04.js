import './botao04.css';

const React = () =>{
    function handleClick(){
        alert("Bem-vindo ao REACT!")
    };
    return(
        <button className="rec" onClick={handleClick}>
            React
        </button>
    );
}

export default React;