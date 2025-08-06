import './lista.css'

const frutas = [
    { title:'Banana', Fruta:false, id:1},
    { title: 'Manga', Fruta:true, id:2},
    { title: 'Laranja', Fruta:false, id:3},
    { title: 'Maça', Fruta:true, id: 4},
];

function Lista_Frutas(){
    const Lista = frutas.map(product =>
        <li 
        key={product.id}
        style={{color: product.Fruta ? "magenta": 'darkgreen'}} 
        >
        {product.title}
        </li>
    
    );
    return(
        <ul>{Lista}</ul>
    );
}

export default Lista_Frutas;