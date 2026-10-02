function calcular(){
    const numero1 = Number(document.querySelector("#numero1").value);
    const numero2 = Number(document.querySelector("#numero2").value);
    const conta = document.querySelector("#conta").value;
    const resultado = 
    conta == "+" ? numero1 + numero2 :
    conta == "-" ? numero1 - numero2 :
    conta == "*" ? numero1 * numero2 :
    conta == "/" && numero2 == 0 ? "Erro" :
    conta == "/" ? numero1 / numero2 : "erro";

    document.querySelector("#resultado").textContent = "Resultado: " + resultado;
}

function limpar(){
    document.querySelector("#numero1").value = "";
    document.querySelector("#numero2").value = "";
    document.querySelector("#resultado").textContent = "";
}