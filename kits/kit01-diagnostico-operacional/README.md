# KIT01 · Diagnóstico operacional (demo pública)

**Objectivo:** gerar um primeiro relatório de oportunidades a partir de processos empresariais **fictícios**. Não requer modelo de IA, chaves, API ou dados de clientes.

## Instalação e execução

1. Instalar Node.js 22 ou compatível.
2. Clonar o repositório Academy e entrar na sua pasta.
3. Executar: `node kits/kit01-diagnostico-operacional/index.mjs`.
4. Para avaliar outro ficheiro JSON: `node kits/kit01-diagnostico-operacional/index.mjs caminho/para/operacao.json`.
5. Testar: `node --test kits/kit01-diagnostico-operacional/teste.test.mjs`.

Saída: diagnóstico no terminal, com prioridades por processo e questões por verificar. Não executa automações nem altera ficheiros.

Campos exigidos do JSON: `operacao` (string), `processos` (lista com `id`, `nome`, `frequencia_semanal`, `tempo_por_ocorrencia_min`, `repetitivo`, `fonte_confirmada`).

**Nota:** pontuação é uma heurística didática, não medição de rentabilidade nem recomendação automática de investimento. Após o diagnóstico, é necessária validação humana do processo, dos riscos e dos dados. Esta demo é pública; os guiões e materiais de formação completos serão distribuídos na área de membros.
