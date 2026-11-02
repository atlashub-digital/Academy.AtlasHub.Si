# AtlasHub Academy

Repositório público **transversal a todas as formações** da AtlasHub Academy. Conteúdos pagos, dados pessoais e assets reservados NÃO são publicados aqui.

## F01 — A Arquitectura da SuperInteligência Agêntica

Das Operações Reais à Empresa Aumentada · **R$147** · lives **9, 12 e 19 de novembro de 2026**, 90 minutos cada. Horários, acesso e checkout na Hotmart Club pendentes de configuração e QA.

## F02 — Atlas Genesis · Turma 2027

Criar uma empresa ou operação agêntica, desenvolver soluções, prestar serviços e validar modelos de negócio. **R$490**, com parcelamento sujeito à configuração da Hotmart; **R$190 Student**, mediante contacto. Genesis inclui acesso às três lives da F01. Há **3 ateliers preparatórios adicionais** em novembro e dezembro de 2026 e **24 ateliers previstos** de janeiro a março de 2027.

## O que existe aqui

- `catalogo/`: formações, seis Cases e progressão curricular.
- `formacoes/`: F01 e Genesis, cronogramas e manifestos de sessões.
- `cases/`: Case Library transversal, com C01–C06 originados na F01.
- `ofertas/hotmart.json`: política de preços e acessos, **não prova da existência das ofertas na Hotmart**.
- `kits/`: demos públicas e seguras, instaláveis sem credenciais. **Não substituem** as apostilas, módulos ou projectos pagos.
- `operacao/HOTMART_TRANSICAO.md`: configurações a testar e futuro caminho para Atlas ClubOS.
- `GOVERNANCA.md`: versionamento e direitos.

## Instalação das demos públicas

```bash
git clone https://github.com/atlashub-digital/Academy.AtlasHub.Si.git
cd Academy.AtlasHub.Si
node kits/kit01-diagnostico-operacional/index.mjs
node kits/kit02-aprovacao-supervisionada/index.mjs
node --test kits/*/teste.test.mjs
```

> Durante a revisão da PR, usar a branch `feat/academy-catalogo-f01-case-library`. Node.js 22 recomendado; zero dependências externas. O kit02 é um **simulador determinístico**, não um agente conectado a LLM. Os kits avançados para os alunos têm uma entrega própria sujeita a homologação.

**Arquitetura:** GitHub = catálogo, código e demos públicas; Drive = documentos e media; Hotmart Club = área de membros inicial; Atlas ClubOS = destino futuro; Editions = publicações digitais independentes.
