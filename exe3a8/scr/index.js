import { Pedido } from "./models/pedido.js";
import { Produto } from "./models/products.js";
import { elementPedido } from "./view/dom.js";

const prod1 = new Produto("Maverick preto", 40_000, true, 1);
const prod2 = new Produto("Opala preto", 10_000, true, 3);
const prod3 = new Produto("Brasilia amarela", 20_000, false, 0);
const prod4 = new Produto("HB20 branco", 3_200, true, 2);
const prod5 = new Produto("Camelo caramelo", 1_000, false, 0);

const pdDarlan = new Pedido("20220001", "Darlan");
const pdThaina = new Pedido("20220002", "Thaina");

pdDarlan.adicionarProduto(prod5);
pdDarlan.adicionarProduto(prod2);

pdThaina.adicionarProduto(prod3);
pdThaina.adicionarProduto(prod1);

const pedidos = [pdDarlan, pdThaina];
const pedidoEl = document.getElementById("pedidos");

pedidos.forEach((pedido) => {
  pedidoEl.appendChild(elementPedido(pedido));
});
