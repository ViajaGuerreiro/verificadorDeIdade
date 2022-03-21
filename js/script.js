function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano') 
    var res = document.querySelector('div#res')

    if(formAno.value.length == 0 || formAno.value > ano) {
        window.alert("Verifique os Dados e tente novamente")
    }else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //Criança
                res.innerHTML = `Detectamos uma criança de ${idade} anos`
                img.setAttribute('src', 'img/bebe-h.png')
            } else if (idade < 18) {
                //Jovem
                res.innerHTML = `Detectamos um jovem de ${idade} anos`
                img.setAttribute('src', 'img/jovem-h.png')
            } else if (idade < 50) {
                //Adulto
                res.innerHTML = `Detectamos um adulto de ${idade} anos`
                img.setAttribute('src', 'img/adulto-h.png')
            } else {
                //Idoso
                res.innerHTML = `Detectamos um idoso de ${idade} anos`
                img.setAttribute('src', 'img/idoso-h.png') 
            }
        } else if (sex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //Criança
                res.innerHTML = `Detectamos uma criança de ${idade} anos`
                img.setAttribute('src', 'img/bebe-f.png')
            } else if (idade < 18) {
                //Jovem
                res.innerHTML = `Detectamos uma jovem de ${idade} anos`
                img.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 50) {
                res.innerHTML = `Detectamos uma adulta de ${idade} anos`
                //Adulta
                img.setAttribute('src', 'img/adulta-f.png')
            } else {
                //Idosa 
                res.innerHTML = `Detectamos uma idosa de ${idade} anos`
                img.setAttribute('src', 'img/idosa-f.png')
            }
        }
        res.appendChild(img)
    }
}
