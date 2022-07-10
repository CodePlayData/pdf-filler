import { readFileSync, writeFileSync } from "node:fs";
import { PDFDocument } from "pdf-lib";

import NovoPDF from "../entity/NovoPDF.js";
import { InputParaCopiar, CopiarPDFRepository } from "../../types.d.js";

export default class CopiarRepository implements CopiarPDFRepository{
    pdf;
    constructor(novoPdf: NovoPDF){
        this.pdf = novoPdf;
    }
    async copiar(input: InputParaCopiar[]){
        let formBytes: Uint8Array | Response;
        let paraCopiar: PDFDocument;
        const novopdf = await PDFDocument.create();
        
        Promise.all(
            input.map(async (i: InputParaCopiar) => {
                if (!String(i.url).includes("http")) {
                    formBytes = readFileSync(i.url);
                    paraCopiar = await PDFDocument.load(formBytes);
                } else {
                    formBytes = await fetch(i.url);
                    paraCopiar = await PDFDocument.load(await formBytes.arrayBuffer());
                }
        
                const paginasPDF = await novopdf.copyPages(paraCopiar, i.paginas)
                for (let index = 0; index < paginasPDF.length; index++) {
                    const pagina = paginasPDF[index];
                    novopdf.addPage(pagina);
                }
            })
        ).then(async ()=>{
            const pdfBytes = await novopdf.save();
            writeFileSync(this.pdf.path, pdfBytes);
        })
    }
}