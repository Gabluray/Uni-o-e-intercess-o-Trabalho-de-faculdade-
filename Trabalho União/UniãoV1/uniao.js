function calcular() {
    const conjuntoA = document.getElementById('conjuntoA').value.split(',').map(item => item.trim());
    const conjuntoB = document.getElementById('conjuntoB').value.split(',').map(item => item.trim());

    const uniao = [...new Set([...conjuntoA, ...conjuntoB])];
    const intersecao = conjuntoA.filter(item => conjuntoB.includes(item));

    document.getElementById('uniao').innerText = `União: { ${uniao.join(', ')} }`;
    document.getElementById('intersecao').innerText = `Interseção: { ${intersecao.join(', ')} }`;
}