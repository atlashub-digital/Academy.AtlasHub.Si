# KIT02 · Workflow de aprovação humana (simulador público)

Este exercício ensina o limite entre **proposta de uma função digital** e **decisão autorizada**. Não utiliza um modelo de IA real, não faz pagamentos, não envia mensagens nem modifica plataformas.

## Instalação e execução

- `node kits/kit02-aprovacao-supervisionada/index.mjs`
- `node --test kits/kit02-aprovacao-supervisionada/teste.test.mjs`

O exemplo recebe eventos fictícios; operações sensíveis como preço, reembolso ou reserva passam para `AGUARDA_APROVACAO`. A ação só pode ser aplicada após confirmação por um serviço autorizado, fora desta demo. Serve como base de especificação de agentes na F01 e para testes avançados na Genesis.
