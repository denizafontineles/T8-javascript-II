const objeto = {
    nome: "Deniza",
    idade: "21",
    profissao: "Desenvolvedora",
    empresa: "Google",
    contato: "https://github.com/denizafontineles",
    "foto-perfil": "https://lh3.googleusercontent.com/proxy/TTjTuyhygObibxmFFHEeJ627vrbv7dWIrGR2yH6UvbpEBAaDeSo4F3ucbM9uvqxqzqO9lKUBpr05mSZmFsAjHak8PZRmcZNuZtY5Okwyn5JFHSPhncJ81PEymakSUdBO9FgfvOPntIcfDJhI=s0-d",
}

let exibirConteudo = document.querySelector("#exibir-objetos");

for (let propriedade in objeto) {
    let mostraObjeto = document.createElement("p");
    exibirConteudo.appendChild(mostraObjeto);
    mostraObjeto.textContent=objeto[propriedade];
}



//Quando for dá nome a propriedade do objeto se tiver espaço tem que colocar em "". Exemplo: "conta bancaria": 123  OUU  "conta-bancaria":"lala".


// const exibir = document.createElement("h1");
// exibirConteudo.appendChild(exibir);
// exibir.textContent = objeto.nome;
 
// exibirConteudo.appendChild(exibir2);
// exibir2.textContent = objeto.idade;

// const exibir3 = document.createElement("span");
// exibirConteudo.appendChild(exibir3);
// exibir3.textContent = objeto.profissao;

// const contatoLink = document.createElement("a");
// exibirConteudo.appendChild(contatoLink);
// contatoLink.textContent = "Meu contato";
// contatoLink.setAttribute("href", objeto.contato);
// contatoLink.setAttribute("target", "_blank");

const foto = document.createElement("img");
    exibirConteudo.appendChild(foto);
    foto.setAttribute("src", objeto["foto-perfil"]);

// //




