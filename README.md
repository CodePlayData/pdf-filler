# PDFHandler

## Especificações
* Framework: Node 18+
* Flags: Fetch API e Node:fs
* Dependência: pdf-lib

<br>

## Sobre
Esse módulo permite o preenchimento automatizado dos PDF usados na regra negócio a depender dos inputs de entrada.
Os documentos LME, TCLE, Formulário de Risco à gravidez do uso da Acitretina, Receituario e Formulário de prescrição, já estão implementados nos casos de uso: PDFInfo, usado para obter informações de entrada desses formulários citados; PreencherDocumentacao, preenche um ou mais formularios escolhidos segundo seus inputs **em ordem**; e PreencherPDF, que preenche apenas um formulário.

<br>

### Desenvolvimento
Caso seja necessário implementar algum novo documento extenda a nova classe do `GenericoRepository.ts` e implemente no objeto que usado como *map* nas regras de uso que estão na pasta `/app`.

<br>

### Testes
Os testes não puderam ser implementados seguindo as práticas comuns dado que todo o funcionamento da aplicação depende de I/O assíncronos e não existe no pacote `pdf-lib` uma forma de "ler" se o pdf foi preenchido corretamente. Por isso a pasta `/test`, que não é compilada na **/dist** do pacote, é uma sequência de tentativas comuns de uso, devendo o *dev* checar se os pdfs exibem os campos preenchidos corretamente conforme os inputs passados.

---

<br>


### Deno

O repositório possui duas branches, a principal é a `node` mas existe uma branch para o uso no framework **Deno** (no caso branch *deno*).
