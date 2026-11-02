# Kits e repositórios instaláveis — plano de entregáveis

## Não confundir especificação com conteúdo pronto

| Kit | Objectivo | Requisitos mínimos | Situação |
|---|---|---|---|
| KIT01 — Diagnóstico Operacional | Mapear processo AS-IS, gargalos, riscos e oportunidades | README, dataset fictício, relatório, testes, licença de uso para alunos | produção pendente |
| KIT02 — Agente de Leitura | Ler documento/dados autorizados e propor acções sem executar modificações | execução local, .env.example sem segredos, manual, prompts, verificação de segurança | produção pendente |
| KIT03 — Workflow Supervisionado | Simular evento, agente de análise, fila de aprovação e auditoria | logs, dados sintéticos, testes idempotência e rollback | produção pendente |
| KIT04 — Primeiro Produto de Serviços | Parametrizar escopo, custo, proposta e checklist de implantação | exemplos editáveis, orçamento, contrato-base para revisão | produção pendente |

Todos os kits devem funcionar com **clone + instalação + comando único + testes**, sem credenciais obrigatórias para a demonstração. Usar versões oficiais, manifestos de release, comandos verificados em ambiente limpo e licenciamento compatível com distribuição aos alunos. Para integrações pagas, usar adaptadores opcionais com aprovações explícitas; nunca incluir segredos.

**F01:** KIT01 e KIT02 como prioridade de demonstração, com CATÁLOGO dos restantes e templates de prompts. **Genesis:** KIT01–KIT04 com testes, customização, desenvolvimento e comercialização responsável. Não criar um repositório separado por Case sem necessidade; kits modulares no repositório Academy privado ou pacote de alunos com GitHub acessível aos inscritos.
