function somar() {
    let alt = document.getElementById('altura').value
    let pes = document.getElementById('peso').value
    
    let altura = Number(alt)
    altura = altura / 100
    let peso = Number(pes)
    let imc = peso / (altura * altura)

    
    if (altura == 0 || peso == 0) {
        alert('Verifique os dados')
    } else {
        let res = document.getElementById('resultado')
        res.innerHTML = `Seu IMC é de ${imc.toFixed(2)}`
    }



    // Verificar o IMC
    let verif = document.getElementById('verificar')
    verif.innerHTML = ''
    if (imc < 17) {
        verif.innerHTML += 'Muito abaixo do peso'
    } else if (imc > 17 && imc <= 18.49) {
        verif.innerHTML += 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.99) {
        verif.innerHTML += 'Peso normal'
    } else if (imc >= 25 && imc <= 29.99) {
        verif.innerHTML += 'Acima do peso'
    } else if (imc >= 30 && imc <= 34.99) {
        verif.innerHTML += 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.99) {
        verif.innerHTML += 'Obesidade II'
    }
}

// Tabela IMC
// Abaixo de 17        Muito abaixo do peso
// Entre 17 e 18,49    Abaixo do peso
// Entre 18,5 e 24,99  Peso normal
// Entre 25 e 29,99    Acima do peso
// Entre 30 e 34,99    Obesidade I
// Entre 35 e 39,99    Obesidade II
