let inicio = document.getElementById("inicio");
let sobre = document.getElementById("sobre");
let download = document.getElementById("download");

function navegar(valor) {
    if (valor == "inicio") {
        inicio.scrollIntoView({behavior: "smooth"});
    }
    else if (valor == "sobre") {
        sobre.scrollIntoView({behavior: "smooth"});
    }
    else if (valor == "download") {
        download.scrollIntoView({behavior: "smooth"});
    };
}

function baixar() {
    alert("O Wanderer ainda não está disponível, ele ainda está em fase de desenvolvimento. Recomendo que acesse o site regularmente para não perder nada.")
}