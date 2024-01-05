
function carregar(){
    var msg = window.document.getElementById('msg')
    
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if((hora >= 0) && ( hora < 12)){
        // Bom dia !!
        
        document.body.style.background ='#1259ff'
    }else if((hora >= 12) && (hora < 18)){
        //Boa tarde
        
        document.body.style.background = '#ca957f'
    }else{
        //Boa noite
       
        document.body.style.background = '#626268'
    }
    
    
    }
function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if( fano.value.length == 0 || (fano.value) > ano ){
       window.alert('[ERRO] Verifiquecos dados e tente novamente !')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

      if(fsex[0].checked){
        gênero = 'Homem'
        if(idade >=0 && idade < 5){
            //Bebe
          img.setAttribute('src','bebem.png')
        }else if(idade >= 6 && idade < 13){
            //Criança
            img.setAttribute('src','criancam.png')
        }else if(idade >= 13 && idade < 21){
            //jovem
            img.setAttribute('src','jovemm.png')
        }else if(idade >= 21 && idade < 52){
            //Adulto
            img.setAttribute('src','adultom.png')
        }else{
            //Idoso
            img.setAttribute('src','velhom.png')
        }

      }else if(fsex[1].checked){
        gênero = 'Mulher'
        if(idade >=0 && idade < 5){
            //Bebe
            img.setAttribute('src','bebef.png')
        }else if(idade >= 6 && idade < 13){
            //Criança
            img.setAttribute('src','criancaf.png')

        }else if(idade >= 13 && idade < 21){
            //jovem
            img.setAttribute('src','jovemf.png')

        }else if(idade >= 21 && idade < 52){
            //Adulto
             img.setAttribute('src','adultof.png')
        }else{
            //Idoso
            img.setAttribute('src','velhof.png')
            
        }
      }
      
       
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
       res.appendChild(img)
    }

}