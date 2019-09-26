const livros = {
    Objeto1: {
        "titulo": "JavaScript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-java"
    },
    Objeto2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    Objeto3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

const listarCartalogo = document.querySelector("#lista-do-catalogo")

for(let catalogoCompleto in livros){
    
    const criarLista = document.createElement("li");
    listarCartalogo.appendChild(criarLista);
    
    let catalogoTitulo = document.createElement("h2");
    criarLista.appendChild(catalogoTitulo);
    
    let catalogoQuemEscreveu = document.createElement ("p");
    criarLista.appendChild(catalogoQuemEscreveu);
    
    let catalogoLink = document.createElement("a");
    criarLista.appendChild(catalogoLink);
    // catalogoLink.textContent = "Clicar Link"
    catalogoLink.setAttribute("href")

    catalogoTitulo.textContent = livros[catalogoCompleto]["titulo"]
    catalogoQuemEscreveu.textContent = livros[catalogoCompleto]["quemEscreveu"]
}






