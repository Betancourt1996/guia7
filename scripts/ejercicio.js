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
    let imgs = [
        {
          url: "https://images.unsplash.com/photo-1578255321055-d9ed6a976af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          alt: "perro",
        },
        {
          url: "https://images.unsplash.com/photo-1653938245506-3203e63338b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          alt: "surf",
        },
        {
          url: "https://images.unsplash.com/photo-1648737966282-b193f74a1503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          alt: "papá",
        },
        {
          url: "https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          alt: "programar",
        },
        {
          url: "https://images.unsplash.com/photo-1653934004892-1399fb4444c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          alt: "nieve",
        },
        {
          url: "https://images.unsplash.com/photo-1653242816429-fd9393b49bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          alt: "tazas",
        },
        {
          url: "https://images.unsplash.com/photo-1653904780118-96d8b4b1eced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          alt: "globo",
        },
        {
          url: "https://images.unsplash.com/photo-1653919523364-1e7e221d2917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          alt: "moto",
        },
        {
          url: "https://images.unsplash.com/photo-1654032693719-ada7186b1ae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          alt: "azul",
        },
      ];
      
      const arr_svg =
        document.getElementsByClassName("bd-placeholder-img card-img-top");
      
      for (let i = 0; arr_svg.length && i < imgs.length; i++) {
        const img = document.createElement("img");
        img.src = imgs[i].url;
        img.alt = imgs[i].alt;
      
        arr_svg[0].replaceWith(img);
      }

}
ejecutarCodigo();





