function calcular(){
    let numeroCidades = (document.querySelectorAll('input[type="checkbox"]:checked').length)
    let porcentagem =  (numeroCidades*100/15).toFixed(2)
    if (porcentagem ===100){
        alert("Congratulations! You know all the cities!")
    }else if (porcentagem>50){
        alert ("Wow! You really like to travel! You know " + porcentagem + "% of the cities! ")
    }else{alert ("You know " + porcentagem + "% of the cities! How about visit more cities with us?")}
}
