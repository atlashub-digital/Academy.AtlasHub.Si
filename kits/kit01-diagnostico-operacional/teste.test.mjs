import test from "node:test";
import assert from "node:assert/strict";
import { diagnosticar } from "./lib.mjs";
test("calcula carga sem criar factos comerciais",()=>{
 const x=diagnosticar({operacao:"demo",processos:[{id:"p",nome:"Check",frequencia_semanal:3,tempo_por_ocorrencia_min:10,repetitivo:true,fonte_confirmada:true}]});
 assert.equal(x.processos[0].minutosEstimadosPorSemana,30);
 assert.equal(x.processos[0].potencialDeAnalise,"investigar");
 assert.match(x.aviso,/sem projeção/);
});
test("dados sem fonte ficam para revisão humana",()=>{
 const x=diagnosticar({operacao:"demo",processos:[{id:"p",nome:"Check",frequencia_semanal:1,tempo_por_ocorrencia_min:2,repetitivo:true,fonte_confirmada:false}]});
 assert.equal(x.processos[0].potencialDeAnalise,"revisao_humana");
});
