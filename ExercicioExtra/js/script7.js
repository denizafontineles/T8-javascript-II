const formulario = document.getElementById("formulario-de-comentarios");
const chamarComentarios = document.getElementById("todos-os-comentarios"); //chamar a id que a div será criada
//criar uma caixa (formulário) e uso para guardar o dom chamando o Id chamado "formulario-de-comentarios" e essa variável será guardada paracser utilizada depois.
const erro = document.querySelector(".aviso-erro");

formulario.addEventListener("submit", function (evento) { //chama a caixa formulário para dá um evento pra ele (document.addEventListerner) será usado para dá evento apenas no Id chamado. Como quer que tenha um evento no formulário será usado o evento "submit" qur será usado apenas na caixa do fomulário que está indicado no Id.
    evento.preventDefault();
    
    let capturarInput = document.querySelector(".input-de-texto");
    let mensagem = capturarInput.value.trim();//pegando valor que está dentro dele; Se usuário digitar fazer tal coisa. É o valor que o usuário digitou.
       
    if(mensagem === ""){ //input de texto, porque é um texto então não pode ser número

        erro.textContent = "Escreva texto válido";
        erro.classList.add("aviso")

        // ============== OUUU =============

        // const avisoErro = document.createElement("p");
        // formulario.appendChild(avisoErro);

        // avisoErro.textContent = "fala direito";
        // avisoErro.classList.add("aviso");
    
    }else{
        let comentarioDigitar = document.createElement("p"); //criei uma tag para ser feito no html e quando o usuário digitar a aparecer dentro dessa div
    
        comentarioDigitar.textContent = mensagem;

        chamarComentarios.appendChild(comentarioDigitar); //chamei o pai que que é um Id do html e coloquei meu elemento criado que é a div, dentro do pai, mostrando que a div ficará dentro dessa id chamada, acrescentando dentro do html.
        
        comentarioDigitar.classList.add("comentario"); //adicionei no js a classe criada no css 
    
        formulario.reset(); //voltar tudo, reiniciar
    }

    


});


