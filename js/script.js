dados = document.querySelector('#myForm')

dados.addEventListener('submit', function(event){

    event.preventDefault()

    resultado = document.querySelector('.resultado')
    msg = document.querySelector('#msg')

    inputPeso = event.target.querySelector('#peso')
    inputAltura = event.target.querySelector('#altura')

    peso = Number(inputPeso.value)
    altura = Number(inputAltura.value)
    altura = altura / 100

    imcClass = ['Abaixo do peso', 'Peso ideal', 'Sobrepeso', 'Obesidade']
    
    imc = peso / altura ** 2

    if(imc < 18.5){

        resultado.style.display = 'flex'
        resultado.style.backgroundColor = '#6db5e8'
        msg.innerHTML = `Seu ICM é: ${imc.toFixed(2)} (${imcClass[0]})`


    } if(imc >= 18.6){

        resultado.style.display = 'flex'
        resultado.style.backgroundColor = '#7ec395'
        msg.innerHTML = `Seu ICM é: ${imc.toFixed(2)} (${imcClass[1]})`

    } if(imc >= 25){

        resultado.style.display = 'flex'
        resultado.style.backgroundColor = '#f8e551'
        msg.innerHTML = `Seu ICM é: ${imc.toFixed(2)} (${imcClass[2]})`

    } if(imc >= 40){

        resultado.style.display = 'flex'
        resultado.style.backgroundColor = '#de4d55'
        msg.innerHTML = `Seu ICM é: ${imc.toFixed(2)} (${imcClass[3]})`

    }

})

dados.addEventListener('reset', function(){

    window.location.reload(true);

})
