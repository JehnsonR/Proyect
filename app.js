// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Agrega un nombre al array y verifica que se encuentre vacío
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
  
    if (nombreAmigo.trim() === "") {
      alert("Ingresa un nombre");
    } else {
      amigos.push(nombreAmigo);
      document.querySelector("#amigo").value = "";
      mostrarListaAmigo();
    }
  }
  
  //actualiza la lista y crea elementos "li"
  function mostrarListaAmigo() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
  
    for (let index = 0; index < amigos.length; index++) {
      const element = amigos[index];
  
      let listaHTML = document.createElement("li");
      listaHTML.textContent = element;
      listaAmigos.appendChild(listaHTML);
    }
  }
  
  //Sortea amigo
  function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    if (cantidadAmigos === 0) {
      alert("Ingresa un nombre para el sorteo");
    } else {
      let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
      let resultadoHTML = document.querySelector("#resultado");
      resultadoHTML.innerHTML = amigos[indiceAmigo];
    }
  }