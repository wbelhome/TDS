function faculdade(medioConcluido, idade, cursandoOutraFaculdade) {
    if (medioConcluido && idade >= 18 && !cursandoOutraFaculdade) {
        return "Você pode se inscrever na faculdade.";
    }else {
        return "Você não pode se inscrever na faculdade.";
    }   
}

console.log(faculdade(true, 20, false))