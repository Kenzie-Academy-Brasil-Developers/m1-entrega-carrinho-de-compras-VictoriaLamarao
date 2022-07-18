const productsCart = [
  {
    id: 1,
    name: "Uva Crimson",
    price: 44.99,
  },
  {
    id: 2,
    name: "Vinho Canção",
    price: 17.98,
  },
  {
    id: 3,
    name: "Água de coco",
    price: 8.99,
  },
  {
    id: 4,
    name: "Água tônica",
    price: 17.98,
  },
  {
    id: 5,
    name: "Mamão",
    price: 9.98,
  },
];


let body = document.querySelector("body");

let main = document.createElement("main");
main.classList.add("principal");

let h1 = document.createElement("h1");
h1.classList.add("titulo");

let ul = document.createElement("ul");
ul.classList.add("lista-produtos");

let cabecario = document.createElement("li");
cabecario.classList.add("produtos-itens");

let total = document.createElement("li");
total.classList.add("produtos-itens2");

let button = document.createElement("button");
button.classList.add("botao");

h1.innerText = "Virtual Market";
button.innerText = "Finalizar compra";
cabecario.innerHTML = "<p>Item</p><p>Valor</p>";
total.innerHTML = `<p>Total</p><p> R$ ${somaProdutos(productsCart)}</p>`;


function criarListas(objeto) {
  let nome = objeto.name;
  let preco = objeto.price;

  let li = document.createElement("li");
  li.classList.add("produtos");

  let pNome = document.createElement("p");
  pNome.classList.add("nome-produto");

  let pPreco = document.createElement("p");
  pPreco.classList.add("preco-produto");

  pNome.innerText = nome;
  pPreco.innerText = "R$ " + preco;
  
 
  li.append(pNome, pPreco);

  return li;
}
function somaProdutos(productsCart) {
  let preco = productsCart.price;
  let resultado = 0;
  for (let i = 0; i < productsCart.length; i++) {
    resultado += productsCart[i].price;
  }
  return resultado;
}

function passarLi(productsCart){
  for (let i = 0; i < productsCart.length; i++) {
    let objeto = productsCart[i];
    let objeto2 = criarListas(objeto);

    ul.append(objeto2);
    console.log(objeto);
  }
}

main.append(h1, ul, total, button);
body.append(main);
ul.append(cabecario);
passarLi(productsCart);


