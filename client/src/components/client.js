import React from "react"

function Clientes(){
    return(
        <form id="form_cli" method="post">
            <label htmlFor="nome">Nome:</label><br></br>
            <input type="text" name="nome" /><br></br>
            <label htmlFor="cpf">CPF: </label><br></br>
            <input type="number" name="cpf" /><br></br>
            <label htmlFor="rg">RG: </label><br></br>
            <input type="number" name="rg" /><br></br>
            <label htmlFor="ender">Endereço: </label><br></br>  
            <input type="text" name="ender" /><br></br><br></br>
            <button type="Submit">Enviar</button>
        </form>
    ); 
}

export default Clientes;