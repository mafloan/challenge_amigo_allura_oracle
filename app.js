// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = new Set([]);

const amigoInput = document.getElementById('amigo');
const amigoUl = document.getElementById('listaAmigos');
const resultadoUl = document.getElementById('resultado');

function createLiElement(textNode) {
  let node = document.createElement('li');
  let textnode = document.createTextNode(textNode);
  node.appendChild(textnode);
  return node;
}

function agregarAmigo() {
  const value = amigoInput.value;
  amigoInput.value = '';
  if (!value || listaAmigos.has(value) || /\d/.test(value)) {
    alert('Valor no permitido!!');
    return;
  } else {
    listaAmigos.add(value.toLowerCase());
    amigoUl.appendChild(createLiElement(value));
  }
}

function sortearAmigo() {
  const sizeList = listaAmigos.size;
  if (sizeList === 0) {
    alert(
      `Acción no permitida, Primero ingresa un minimo de 2 o más amigos para realizar el sorteo, la cantidad total de amigos actual es de ${sizeList}.`
    );
    return;
  } else {
    const resultado =
      Array.from(listaAmigos)[Math.floor(Math.random() * sizeList)];
    listaAmigos.delete(resultado);
    resultadoUl.appendChild(createLiElement(resultado));
  }
}
