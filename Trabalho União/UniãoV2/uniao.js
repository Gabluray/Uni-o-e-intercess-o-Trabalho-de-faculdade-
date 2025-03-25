//Associativa 1 > (A∪B) ∪ C = A ∪ (B∪C)
//Assocoativa 2 > (A∩B)∩C=A∩(B∩C)
//Distribuitividade 1 > A∩(B∪C)=(A∩B)∪(A∩C)
//Distribuitividade 2 > A∪(B∩C)=(A∪B)∩(A∪C)

//União
function funcaoUniao() {
    let conjuntoA = document.getElementById("conjuntoA").value.split(",").map(item => item.trim())
    let conjuntoB = document.getElementById("conjuntoB").value.split(",").map(item => item.trim())
    let conjuntoC = document.getElementById("conjuntoC").value.split(",").map(item => item.trim())
    
    const uniao = [...new Set([...conjuntoA, ...conjuntoB, ...conjuntoC])]
    document.getElementById("uniao").innerText = `União: {${uniao.join(", ")}}`
}
//Interseção
function funcaoIntersecao(){
    let conjuntoA = document.getElementById("conjuntoA").value.split(",").map(item => item.trim())
    let conjuntoB = document.getElementById("conjuntoB").value.split(",").map(item => item.trim())
    let conjuntoC = document.getElementById("conjuntoC").value.split(",").map(item => item.trim())
    
    const intersecao = conjuntoA.filter(item => conjuntoB.includes(item)&&conjuntoC.includes(item))
    document.getElementById("intersecao").innerText = `Interseção: {${intersecao.join(", ")}}`
}

function associatividade1(){
    let conjuntoA = document.getElementById("conjuntoA").value.split(",").map(item => item.trim())
    let conjuntoB = document.getElementById("conjuntoB").value.split(",").map(item => item.trim())
    let conjuntoC = document.getElementById("conjuntoC").value.split(",").map(item => item.trim())
    //parte1
    let conjunto1 = [...new Set([...conjuntoA, ...conjuntoB])]
    let conjunto2 = [...new Set([...conjunto1,...conjuntoC])]
    //parte2
    let conjunto3 = [...new Set([...conjuntoB, ...conjuntoC])]
    let conjunto4 = [...new Set([...conjuntoA, ...conjunto3])]
    document.getElementById("assoUniao1").innerText = `Parte 1`
    document.getElementById("assoUniao2").innerText = `(A∪B)∪C = ({${conjuntoA}} ∪ {${conjuntoB}}) ∪ {${conjuntoC}}`
    document.getElementById("assoUniao3").innerText = `Parte 2`
    document.getElementById("assoUniao4").innerText = `A∪(B∪C) = {${conjuntoA}} ∪ ({${conjuntoB}} ∪ {${conjuntoC}})`
    document.getElementById("assoUniao5").innerText = `Resultado`
    document.getElementById("assoUniaoResult").innerText = `{${conjunto1}} = {${conjunto4}}`
}

function associatividade2(){
    let conjuntoA = document.getElementById("conjuntoA").value.split(",").map(item => item.trim())
    let conjuntoB = document.getElementById("conjuntoB").value.split(",").map(item => item.trim())
    let conjuntoC = document.getElementById("conjuntoC").value.split(",").map(item => item.trim())
    //parte1
    let conjunto1 = conjuntoA.filter(item => conjuntoB.includes(item))
    let conjunto2 = conjuntoC.filter(item => conjunto1.includes(item))
    //parte2
    let conjunto3 = conjuntoB.filter(item => conjuntoC.includes(item))
    let conjunto4 = conjuntoA.filter(item => conjunto3.includes(item))
    document.getElementById("assoIntersecao1").innerText = `Parte1`
    document.getElementById("assoIntersecao2").innerText = `(A∩B)∩C = ({${conjuntoA}} ∩ {${conjuntoB}}) ∩ {${conjuntoC}}`
    document.getElementById("assoIntersecao3").innerText = `Parte 2`
    document.getElementById("assoIntersecao4").innerText = `A∩(B∩C) = {${conjuntoA}} ∩ ({${conjuntoB}} ∩ {${conjuntoC}})`
    document.getElementById("assoIntersecao5").innerText = `Resultado`
    document.getElementById("assoIntersecaoResult").innerText = `{${conjunto2}} = {${conjunto4}}`
}

function distribuitividade1(){
    let conjuntoA = document.getElementById("conjuntoA").value.split(",").map(item => item.trim())
    let conjuntoB = document.getElementById("conjuntoB").value.split(",").map(item => item.trim())
    let conjuntoC = document.getElementById("conjuntoC").value.split(",").map(item => item.trim())
    //parte1
    let conjunto1 = [...new Set([...conjuntoB, ...conjuntoC])]
    let conjunto2 = conjuntoA.filter(item => conjunto1.includes(item))
    //parte2
    let conjunto3 = conjuntoA.filter(item => conjuntoB.includes(item))
    let conjunto4 = conjuntoA.filter(item => conjuntoC.includes(item))
    let conjunto5 = [...new Set([...conjunto3, ...conjunto4])]
    //texto
    document.getElementById("distUniao1").innerText = `Parte 1`
    document.getElementById("distUniao2").innerText = `A∩(B∪C) = {${conjuntoA}} ∩ ({${conjuntoB}} ∪ {${conjuntoC}}) `
    document.getElementById("distUniao3").innerText = `Parte 2`
    document.getElementById("distUniao4").innerText = `(A∩B)∪(A∩C) = ({${conjuntoA}} ∩ {${conjuntoB}}) ∪ ({${conjuntoA}} ∩ {${conjuntoC}})`
    document.getElementById("distUniao5").innerText = `Resultado`
    document.getElementById("distUniaoResult").innerText = `{${conjunto2}} = {${conjunto5}}`
}

function distribuitividade2(){

    let conjuntoA = document.getElementById("conjuntoA").value.split(",").map(item => item.trim())
    let conjuntoB = document.getElementById("conjuntoB").value.split(",").map(item => item.trim())
    let conjuntoC = document.getElementById("conjuntoC").value.split(",").map(item => item.trim())
    //parte1
    let conjunto1 = conjuntoB.filter(item => conjuntoC.includes(item))
    let conjunto2 = [...new Set([...conjuntoA, ...conjunto1])]
    //parte2
    let conjunto3 = [...new Set([...conjuntoA, ...conjuntoB])]
    let conjunto4 = [...new Set([...conjuntoA, ...conjuntoC])]
    let conjunto5 = conjunto3.filter(item => conjunto4.includes(item))
    //texto
    document.getElementById("distIntersecao1").innerText = `Parte 1`
    document.getElementById("distIntersecao2").innerText = `A∪(B∩C) = {${conjuntoA}} ∪ ({${conjuntoB}} ∩ {${conjuntoC}})`
    document.getElementById("distIntersecao3").innerText = `Parte 2`
    document.getElementById("distIntersecao4").innerText = `(A∪B)∩(A∪C) = ({${conjuntoA}} ∪ {${conjuntoB}}) ∩ ({${conjuntoA}} ∪ {${conjuntoC}})`
    document.getElementById("distIntersecao5").innerText = `Resultado`
    document.getElementById("distIntersecaoResult").innerText = `{${conjunto2}} = {${conjunto5}}`
}

function morgan(){
    let conjuntoUniverso = document.getElementById("morganUniverso").value.split(",").map(item => item.trim())
    let conjuntoA = document.getElementById("morganA").value.split(",").map(item => item.trim())
    let conjuntoB = document.getElementById("morganB").value.split(",").map(item => item.trim())
    //parte1
    passo1 = [...new Set([...conjuntoA,...conjuntoB])]
    passo2 = conjuntoUniverso.filter(item => !passo1.includes(item))
    //parte2
    passo3 = conjuntoUniverso.filter(item => !conjuntoA.includes(item))
    passo4 = conjuntoUniverso.filter(item => !conjuntoB.includes(item))
    passo5 = passo3.filter(item => passo4.includes(item))
    //texto
    document.getElementById("morganUniao1").innerText = `Parte 1`
    document.getElementById("morganUniao2").innerText = `(A ∪ B)c = U={${conjuntoUniverso}} - A={${conjuntoA}} ∪ B={${conjuntoB}}`
    document.getElementById("morganUniao3").innerText = `Parte 2`
    document.getElementById("morganUniao4").innerText = `Ac ∩ Bc = U={${conjuntoUniverso}} - A={${conjuntoA}} ∩ U={${conjuntoUniverso}} - A={${conjuntoB}}`
    document.getElementById("morganUniao5").innerText = `Resultado`
    document.getElementById("morganUniaoResult").innerText = `{${passo2}} = {${passo5}}`
}