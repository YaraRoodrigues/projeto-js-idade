function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero=''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            gênero ='Homem'
            if (idade >=0 && idade <11){
                //criança
                img.setAttribute('src','imagens/bebem.png')
            }else if( idade <22) {
                //jovem
                img.setAttribute('src','imagens/homem.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src','imagens/adulto.png')
            }else {
                //idoso
                img.setAttribute('src','imagens/idoso.png')
            }
            
        } else if (fsex[1].checked) {
        gênero = 'mulher'
        if (idade >=0 && idade <10){
            //criança
            img.setAttribute('src','imagens/bebef.png')
            img.set
        }else if( idade <25) {
            //jovem
            img.setAttribute('src','imagens/mulher.png')
        }else if(idade <50){
            //adulto
            img.setAttribute('src','imagens/adulta.png')
        }else {
            //idoso
            img.setAttribute('src','imagens/idosa.png')
        }
     }

        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` 
        res.appendChild(img)
    }
}