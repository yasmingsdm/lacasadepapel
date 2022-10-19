function calcular(){
    let numeroCidades = (document.querySelectorAll('input[type="checkbox"]:checked').length)
    let porcentagem =  (numeroCidades*100/15).toFixed(2)
    if (porcentagem ==100){
        alert("Grattis! Du känner alla städer!")
    }else if (porcentagem>50){
        alert ("Wow! Du gillar mycket att resa! Du känner " + porcentagem + "% av städerna!")
    }else{alert ("Du känner " + porcentagem + "% av städerna! Vill du besöka fler städer med oss?")}
        }
