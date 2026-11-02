# Hotmart Club — operação inicial F01 e Genesis

## Objectivo
Usar **uma área de membros AtlasHub Academy** com **dois produtos/percursos separados**, mantendo os IDs F01 e F02 e os direitos de acesso individualizados.

### Produto F01
Atelier A Arquitectura da SuperInteligência Agêntica · R$147 · três lives 09, 12, 19/11 · três módulos com página de orientação, live/replay, slides, prompts, exercícios, kit de demonstração e quiz. Conteúdo e gravações só após QA.

### Produto F02
Turma Genesis 2027 · R$490 (parcelamento sujeito a configuração) · oferta Student R$190 por contacto e liberação individual. Área da turma separa **PRE01, PRE02, PRE03** de **AT01–AT24**; não misturar com F01 nem criar compras adicionais do Atelier para alunos Genesis.

## Checklist de implementação

1. Confirmar os dois produtos e respectivos IDs; não criar uma oferta duplicada sem auditar a conta.
2. Configurar Hotmart Club e turmas distintas; não conceder acesso a toda a área de membros por engano.
3. Configurar preço F01 R$147 e F02 R$490; simular compra e parcelamento F02 antes da divulgação do número de prestações ou do valor da parcela.
4. Criar preço alternativo Student R$190, com ligação individual e validação operacional. O contacto é comercial, não uma verificação escolar obrigatória; nenhuma prova documental exigida por defeito.
5. Confirmar o acesso F02 → F01 sem custo: atribuição manual do produto F01 aos membros F02 como solução inicial; automação por API apenas após testes de segurança/entitlements. Testar conta de aluno separada.
6. Adicionar módulos de recepção, calendário, materiais necessários, suporte e regras de comunidade; publicar apenas activos homologados.
7. Inserir lives/replays, legendas, PDFs, prompts e links para repositórios instaláveis. Não divulgar GitHub privado sem mecanismo de autorização.
8. Testar compra aprovada, pagamento pendente, reembolso, perda de acesso, compra Student, liberação cruzada e futura migração para ClubOS.
9. Manter registo mínimo por matrícula: product_code, Hotmart product id, transaction id, student id/email, access F01/F02, version of terms, consent, enrollment_at. Dados pessoais não vão para Github público.
10. Antes da migração: exportar os direitos válidos, reconciliar compras e reembolsos, comunicar calendário, testar importação no ClubOS, manter sobreposição transitória e só retirar a área Hotmart quando todos os acessos confirmados.

**Estado:** proposta operacional, não há ID de produto, URL de pagamento ou contas de teste verificados nesta alteração. A Hotmart permite importação/atribuição de membros e configuração de turmas, conforme documentação oficial; disponibilidade exacta depende da conta e do tipo de oferta.

Fontes oficiais: https://help.hotmart.com/pt-br/article/208709027/como-importar-alunos-para-minha-area-de-membros-ou-curso-online ; https://help.hotmart.com/pt-br/article/360014492431/como-comprar-um-produto-na-hotmart-
