

let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
      return true
  }else{

    return false
  }
}

function inLista(n,l){
   if(l.indexOf(Number(n)) != -1 ){
    return true
   }else{
    return false
   }

}

function adicionar (){
    if (isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
}else{
    window.alert('valor inválido ou já encontrado')
}
 num.value = ''
 num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Por favor adicione valores')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for( let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
             maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${tot} números cadastrados.`
        res.innerHTML += `<p> O maior valor é ${maior} </P>`
        res.innerHTML += `<p> O menor valor informado é ${menor} </p>`
        res.innerHTML += `<p> O valor da soma é : ${soma} </p>`
        res.innerHTML += `<p> A média dos valores informado  é ${media} </p>`
    }
}