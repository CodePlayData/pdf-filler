import NovoPDF from "../engine/entity/NovoPDF.js";
import CopiarRepository from "../engine/repository/CopiarRepository.js";

const novoDoc = new NovoPDF('./novo.pdf')
const copiarPDF = new CopiarRepository(novoDoc);

copiarPDF.copiar([{url: 'https://raw.githubusercontent.com/dev-sparti/docs/main/form.pdf', paginas: [0]}])