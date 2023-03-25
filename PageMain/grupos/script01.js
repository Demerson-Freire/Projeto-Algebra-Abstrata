function finalizar(){

    let num = window.document.getElementById('num')
    let num2 = window.document.getElementById('num2')
    let num3 = window.document.getElementById('num3')
    let res01 = window.document.getElementById('res01')


    let resnum = Number(num.value)
    let resnum2 = Number(num2.value)
    let resnum3 = Number(num3.value)
    
    
    if (num.value.length == 0 || num2.value.length == 0 || num3.value.length == 0){
        window.alert('Erro: Verifique se todos os valores foram preenchidos corretamente.')
    } else {

        let fres = resnum * (resnum2 * resnum3)
        let fres2 = (resnum * resnum2) * resnum3


        res01.innerHTML =`O valor de "x" é ${resnum}.<br>
        O valor de "y" é ${resnum2}.<br>
        O valor de "z" é ${resnum3}.<br>

        <strong><br>x &lowast; (y &lowast; z) = (x &lowast; y) &lowast; z<br></strong>
        
        <br>${resnum} &lowast; (${resnum2} &lowast; ${resnum3}) = ${fres}<br>
        (${resnum} &lowast; ${resnum2}) &lowast; ${resnum3} = ${fres2}`
    }
}

function finalizar2(){

    let num4 = window.document.getElementById('num4')
    let res02 = window.document.getElementById('res02')

    let resnum4 = Number(num4.value)

    if (num4.value.length == 0) {
        window.alert('Erro: Verifique se todos os valores foram preenchidos corretamente.')
    } else {
        
        let neutro = 1

        let fres = resnum4 * neutro
        let fres2 = neutro * resnum4
    
        res02.innerHTML = `O valor de "x" é ${resnum4}.<br>
        O valor de <em>e</em> é ${neutro}.<br>

        <strong><br>x &lowast; <em>e</em> = <em>e</em> &lowast; x = x<br></strong>
        
        <br>${resnum4} &lowast; ${neutro} = ${fres}<br>
        ${neutro} &lowast; ${resnum4} = ${fres2}`
    }

}

function finalizar3(){

    let num5 = window.document.getElementById('num5')
    let res03 = window.document.getElementById('res03')

    let resnum5 = Number(num5.value)

    if (num5.value.length == 0) {
        window.alert('Erro: Verifique se todos os valores foram preenchidos corretamente.')
    } else {

        let neutro = 1

        let fres = resnum5 * resnum5**-1
        let fres2 = resnum5**-1 * resnum5

        res03.innerHTML = `O valor de "x" é ${resnum5}.<br>
        O valor de <em>e</em> é ${neutro}.<br>

        <strong><br>x &lowast; x<sup>-1</sup> = x<sup>-1</sup> &lowast; x = <em>e</em><br></strong>
        
        <br>${resnum5} &lowast; ${resnum5}<sup>-1</sup> = ${fres}<br>
        ${resnum5}<sup>-1</sup> &lowast; ${resnum5} = ${fres2}`
    }
    
}