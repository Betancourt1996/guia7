let ejecutarCodigo = () => {
    //alert('Hola, mundo!');
    titulo=document.getElementById('titulo1');
    titulo.textContent = "Album de fotos";
    let arreglo = document.getElementsByClassName('text-muted');
    elemento = arreglo[1];
    elemento.innerHTML = '<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>';
    
    arreglo =document.getElementsByTagName('p');
    console.log(arreglo[2]);
    arreglo[2].setAttribute('class','d-none');
}
ejecutarCodigo();