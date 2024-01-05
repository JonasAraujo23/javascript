

function soma(n1 = 1 ,n2 = 1){
    return n1 * n2
}
  let res = soma(5,)

console.log(res)

function parimp(n){
    if( n % 2 == 0){
    return "Par"
}else {
    return "impar"
}
}

 let resp = parimp(res)
console.log(resp)

function fatorial(num){
    let fat = 1  
    for (let c = num; c > 1; c--){
        fat *= c 
    }
    return fat
}
console.log(fatorial(res))