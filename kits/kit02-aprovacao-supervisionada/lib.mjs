const sensiveis = new Set(["alterar_preco","reservar_stock","reembolsar","enviar_mensagem"]);
export function avaliarPedido(pedido) {
  if (!pedido || typeof pedido.id !== "string" || typeof pedido.acao !== "string") throw new Error("Pedido inválido");
  const exigeAprovacao = sensiveis.has(pedido.acao);
  return { id:pedido.id, accao:pedido.acao,
    status: exigeAprovacao ? "AGUARDA_APROVACAO" : "ANALISE_SEM_ESCRITA",
    aplicado:false,
    motivo: exigeAprovacao ? "Ação sensível requer autorização no sistema transacional" : "Apenas relatório de leitura" };
}
