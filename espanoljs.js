function calcular(){
    let numeroCidades = (document.querySelectorAll('input[type="checkbox"]:checked').length)
    let porcentagem =  (numeroCidades*100/15).toFixed(2)
    if (porcentagem ==100){
        alert("¡Enhorabuena! ¡Conoces todas las ciudades!")
    }else if (porcentagem>50){
        alert ("¡Guau! ¡Te gusta mucho viajar! ¡Conoces " + porcentagem + "% de las ciudades! ")
    }else{alert ("Conoces " + porcentagem + "% de las ciudades! ¿Qué te pareces visitar más ciudades con nosotros?")}
}
