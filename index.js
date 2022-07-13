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

let body = document.querySelector('carrinho')

/* let main = document.createElement("main");
main.classList.add("principal");

let h1 = document.createElement("h1");
h1.classList.add("titulo");

let ul = document.createElement("ul");
ul.classList.add("lista-produtos");

let liItens = document.createElement("li");
liItens.classList.add("produtos-itens"); */

/* let total = document.createElement("li");
total.classList.add("produtos");

let button = document.createElement("button");
button.classList.add("botao"); */



function criarListas(objeto) {
  let nome = objeto.name;
  let preco = objeto.price;

  let li = document.createElement(li);
  li.classList.add("produtos");

  let pNome = document.createElement("p");
  pNome.classList.add("nome-produto");

  let pPreco = document.createElement("p");
  pPreco.classList.add("preco-produto");

  pNome.innerText = nome
  pPreco.innerText = preco

  li.append(pNome,pPreco)
}

console.log(criarListas(productsCart));
body.append(main);
main.append(h1, ul, button);
ul.append(criarListas(productsCart[0]));
