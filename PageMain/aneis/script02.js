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

        let neutro = 0
        let fres = resnum + (resnum2 + resnum3)
        let fres2 = (resnum + resnum2) + resnum3
        let fres3 = resnum + resnum2
        let fres4 = resnum2 + resnum
        let fres5 = resnum + neutro
        let fres6 = resnum + (-resnum)

        res01.innerHTML = `O valor de "x" é ${resnum}.<br>
        O valor de "y" é ${resnum2}.<br>
        O valor de "z" é ${resnum3}.<br>
        
        <br><strong>x + (y + z) = (x + y) + z</strong><br>

        <br>${resnum} + (${resnum2} + ${resnum3}) = ${fres}<br>
        (${resnum} + ${resnum2}) + ${resnum3} = ${fres2}<br>

        <br><strong>x + y = y + x</strong><br>
        
        <br>${resnum} + ${resnum2} = ${fres3}<br>
        ${resnum2} + ${resnum} = ${fres4}<br>

        <br><strong>x + 0 = x</strong><br>
        
        <br>${resnum} + ${neutro} = ${fres5}<br>

        <br><strong>x + (-x) = 0</strong><br>
        
        <br>${resnum} + (-${resnum}) = ${fres6}`

    }
}

function finalizar2(){

    let num4 = window.document.getElementById('num4')
    let num5 = window.document.getElementById('num5')
    let num6 = window.document.getElementById('num6')
    let res02 = window.document.getElementById('res02')

    let resnum4 = Number(num4.value)
    let resnum5 = Number(num5.value)
    let resnum6 = Number(num6.value)

    if (num4.value.length == 0 || num5.value.length == 0 || num6.value.length == 0){
        window.alert('Erro: Verifique se todos os valores foram preenchidos corretamente.')
    } else {

        let fres7 = (resnum4 * resnum5) * resnum6
        let fres8 = resnum4 * (resnum5 * resnum6)

        res02.innerHTML = `O valor de "x" é ${resnum4}.<br>
        O valor de "y" é ${resnum5}.<br>
        O valor de "z" é ${resnum6}.<br>
        
        <strong><br>(x · y) · z = x · (y · z)<br></strong>
        
        <br>(${resnum4} · ${resnum5}) · ${resnum6} = ${fres7}<br>
        ${resnum4} · (${resnum5} · ${resnum6}) = ${fres8}`

    }
}

function finalizar3(){

    let num7 = window.document.getElementById('num7')
    let num8 = window.document.getElementById('num8')
    let num9 = window.document.getElementById('num9')
    let res03 = window.document.getElementById('res03')

    let resnum7 = Number(num7.value)
    let resnum8 = Number(num8.value)
    let resnum9 = Number(num9.value)

    if (num7.value.length == 0 || num8.value.length == 0 || num9.value.length == 0){
        window.alert('Erro: Verifique se todos os valores foram preenchidos corretamente.')
    } else {

        let fres9 = resnum7 * (resnum8 + resnum9)
        let fres10 = resnum7 * resnum8 + resnum7 * resnum9
        let fres11 = (resnum7 + resnum8) * resnum9
        let fres12 = resnum7 * resnum9 + resnum8 * resnum9

        res03.innerHTML = `O valor de "x" é ${resnum7}.<br>
        O valor de "y" é ${resnum8}.<br>
        O valor de "z" é ${resnum9}.<br>
        
        <strong><br>x · (y + z) = x · y + x · z<br></strong>
        
        <br>${resnum7} · (${resnum8} + ${resnum9}) = ${fres9}<br>
        ${resnum7} · ${resnum8} + ${resnum7} · ${resnum9} = ${fres10}<br>
        
        <strong><br>(x + y) · z = x · z + y · z<br></strong>
        
        <br>(${resnum7} + ${resnum8}) · ${resnum9} = ${fres11}<br>
        ${resnum7} · ${resnum9} + ${resnum8} · ${resnum9} = ${fres12}`

    }
}