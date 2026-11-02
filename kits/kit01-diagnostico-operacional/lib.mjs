export function diagnosticar(entrada) {
  if (!entrada || typeof entrada.operacao !== "string" || !Array.isArray(entrada.processos)) {
    throw new Error("Esperado objecto com operacao e processos[]");
  }
  const processos = entrada.processos.map(p => {
    for (const k of ["id","nome","frequencia_semanal","tempo_por_ocorrencia_min","repetitivo","fonte_confirmada"]) {
      if (p[k] === undefined || p[k] === null) throw new Error("Campo em falta: " + k);
    }
    if (p.frequencia_semanal < 0 || p.tempo_por_ocorrencia_min < 0) throw new Error("Valores negativos");
    const minutosEstimados = p.frequencia_semanal * p.tempo_por_ocorrencia_min;
    const perguntas = [];
    if (!p.fonte_confirmada) perguntas.push("Confirmar fonte e qualidade dos dados");
    if (!p.repetitivo) perguntas.push("Revisar se a tarefa é padronizável");
    return { id:p.id, nome:p.nome, minutosEstimadosPorSemana:minutosEstimados,
      potencialDeAnalise: p.repetitivo && p.fonte_confirmada ? "investigar" : "revisao_humana", perguntas };
  });
  return { operacao:entrada.operacao, aviso:"Exemplo didático — sem projeção de rentabilidade",
    processos:processos.sort((a,b)=>b.minutosEstimadosPorSemana-a.minutosEstimadosPorSemana) };
}
