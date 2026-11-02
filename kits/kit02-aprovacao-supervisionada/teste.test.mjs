import test from "node:test";
import assert from "node:assert/strict";
import { avaliarPedido } from "./lib.mjs";
test("ações de escrita não são aplicadas",()=>{
 for(const a of ["alterar_preco","reservar_stock","reembolsar","enviar_mensagem"]){
  const x=avaliarPedido({id:"X",acao:a}); assert.equal(x.status,"AGUARDA_APROVACAO"); assert.equal(x.aplicado,false);
 }
});
test("leitura mantém-se sem escrita",()=>{
 const x=avaliarPedido({id:"X",acao:"analisar_divergencia"});
 assert.equal(x.status,"ANALISE_SEM_ESCRITA");assert.equal(x.aplicado,false);
});
