import './lista.css' // Importa a estilização de lista.css

const frutas = [ // Cria um constante frutas que é um dicionário
    { title:'Banana', Fruta:false, id:1}, // Cria uma fruta, com id 1
    { title: 'Manga', Fruta:true, id:2},
    { title: 'Laranja', Fruta:false, id:3},
    { title: 'Maça', Fruta:true, id: 4},
];

function Lista_Frutas(){ // Cria uma função Lista_Frutas
    const Lista = frutas.map(product => // criado a constante Lista que mapea a constante frutas e atribui a product
        <li 
        key={product.id} // puxa a chave identificadoras "product.id"
        style={{color: product.Fruta ? "magenta": 'darkgreen'}}  // Se a Fruta = True a cor vai ser magente senão vai ser verde escuro
        >
        {product.title} /* Puxa o titulo das product
        </li>
    
    );
    return(
        <ul>{Lista}</ul> // Retorna a constante Lista
    );
}

export default Lista_Frutas; // Exporta a função Lista_Frutas