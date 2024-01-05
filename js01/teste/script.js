function contar(){

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

     if( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){

        res.innerHTML = 'Impossivel contar!'
       // window.alert('[ERRO faltam dados !!!]')

     }else{
        res.innerHTML = 'Contando: </br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
          
        // para garantir que não venha travar 
        if( p <= 0){
            window.alert('Passo inválido! considerando PASSO 1')
            p = 1
        }

         // para contagem em ordem crescente
          if( i < f){
             for(let c = i ; c <= f; c += p){

            res.innerHTML += `${c} \u{1f604}`
            }
          }else{
            // para contagem em ordem decrescente
             for(let c = i; c >= f; c -= p){

                res.innerHTML += `${c}  \u{1f606}`

             }
              
          }
          res.innerHTML += ` \u{1f702}`
     }
 

}