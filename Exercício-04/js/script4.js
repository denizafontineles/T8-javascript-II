let pinguim = {
    "nome": "thor",
    "idade": 5,
    "origem": "Antartida"
}

pinguim.andar = function() {
    console.log("andar fdp");
}

pinguim.podeVoar = false;

pinguim.voar = function(){
    if(this.podeVoar === true){ //olha o this referenciandooo!
        console.log("VOA");
    }else{
        console.log("Não pode voar");
    }
}

