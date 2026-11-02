import { avaliarPedido } from "./lib.mjs";
const demo=[{id:"E01",acao:"analisar_divergencia"},{id:"E02",acao:"alterar_preco"},{id:"E03",acao:"reservar_stock"}];
for(const pedido of demo)console.log(JSON.stringify(avaliarPedido(pedido)));
