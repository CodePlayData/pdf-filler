# PDFHandler

## Especificações
* Framework: Node 18+
* Flags: Fetch API e Node:fs
* Dependência: pdf-lib

<br>

## Sobre
Esse módulo permite o preenchimento automatizado dos PDF usados na regra negócio a depender dos inputs de entrada.

<br>

### Desenvolvimento
Extenda a nova classe do `GenericoRepository.ts` com um input específico e uma handler function que preencha essa formulário pdf.
<br>

### Testes
Os testes não puderam ser implementados seguindo as práticas comuns dado que todo o funcionamento da aplicação depende de I/O assíncronos e não existe no pacote `pdf-lib` uma forma de "ler" se o pdf foi preenchido corretamente. Por isso a pasta `/test`, que não é compilada na **/dist** do pacote, é uma sequência de tentativas comuns de uso, devendo o *dev* checar se os pdfs exibem os campos preenchidos corretamente conforme os inputs passados.

---

<br>