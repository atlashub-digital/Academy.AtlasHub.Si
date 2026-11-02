# Governança — Academy, Case Library e ClubOS

## Propriedade dos ativos

1. Um Case possui um **ID global**, um documento-mestre e referências editoriais; a formação contém apenas a adaptação didática e a referência da versão.
2. Os seis Cases nasceram em **F01 — A Arquitectura da SuperInteligência Agêntica**, mas podem ser reutilizados na Genesis e em formações futuras.
3. A mesma imagem/PDF/master só possui um local canónico no Drive. O GitHub público referencia **metadados gerais**, sem replicar conteúdo pago.
4. A exportação para o ClubOS só acontece com conteúdo homologado, permissões de distribuição e matrícula configuradas.

## Versionamento editorial

Padrão: `ATX_<F01|F02|C01..C06>_<ARTEFACTO>_<DESTINO>_VMAJOR.MINOR_STATUS.ext`.

- `RASC`: em elaboração.
- `REV`: em revisão, não publicar.
- `APR`: aprovado editorialmente, pode faltar publicação/QA técnica.
- `VF`: versão final homologada, após revisão e gates.
- `OBS` / `ARQ`: obsoleto ou histórico.

Exemplo hipotético: `ATX_C05_BANNER_LANDINGPAGE_1920x1080_V2.03_VF.png`. Não declarar VF automaticamente.

## Segurança

O repositório é público. **Proibido publicar** obras não lançadas, prompts proprietários, dados de alunos ou clientes, fotos não licenciadas, links internos de acesso ou chaves de API. Para materiais restritos, usar Drive com ACL e/ou um repositório privado específico antes de qualquer commit.

## Gates

- G0: fonte de verdade e direitos de uso.
- G1: revisão editorial e técnica.
- G2: media, legibilidade, acessibilidade e marca oficial.
- G3: operação do ClubOS, preço, checkout, matrícula e entitlement verificados.
- G4: aprovação de versão e manifesto de release.

`catalogo/cases.json` é um inventário, não evidência dos gates nem autorização para publicação.
