let btn = document.getElementById('calc')

btn.addEventListener("click", function(){

    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    let imc = peso / (altura / 100) * (altura / 100)

    if (imc < 18.5) {
     
        document.getElementById("resultado").style.backgroundColor = "--abaixo";
        document.getElementById("resultado").innerHTML = ('Abaixo do peso');

    } else if (imc >= 18.5 && imc < 25) {

        document.getElementById("resultado").style.backgroundColor = "--pesonormal";

    } else if (imc >= 25 && imc < 30) {

        document.getElementById("resultado").style.backgroundColor = "--sobrepeso";

    } else {

        document.getElementById("resultado").style.backgroundColor = "--obesidadeIII";
        
    }

})