// calcular quantas cidades a pessoa conhece (em porcentagem)
function calcular(){
    let numeroCidades = (document.querySelectorAll('input[type="checkbox"]:checked').length)
    let porcentagem =  (numeroCidades*100/15).toFixed(2)
    if (porcentagem ==100){
        alert("Parabéns! Você conhece todas as cidades da série!")}
        else if (porcentagem>50){
    alert ("Uau! Você gosta muito de viajar! Você conhece " + porcentagem + "% das cidades da série! ")}
    else{alert ("Você conhece " + porcentagem + "% das cidades da série! Que tal conhecer mais?")}

// tirar os checks dos quadradinhos
  document.getElementsById("rio").checked = false
    }
