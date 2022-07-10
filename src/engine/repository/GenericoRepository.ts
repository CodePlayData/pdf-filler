import { readFileSync, writeFileSync } from "node:fs";
import { PDFDocument, PDFForm } from "pdf-lib";

import PDFDoc from "../entity/PDFDoc.js";
import { PDFRepository } from "../../types.d.js";

export default class GenericoRepository implements PDFRepository {
    dest: string;
    pdf: PDFDoc;
    dictionary: Record<string, any>;

    constructor(pdfDoc: PDFDoc, dictionary: Record<string, any>, dest: string,readonly handler: (object: any, form: PDFForm) => void) {
        this.dest = dest;
        this.pdf = pdfDoc;
        this.dictionary = dictionary;
    }

    get obterInputs() {
        return this.dictionary;
    }

    set alterarOutput(path: string) {
        this.dest = path;
    }

    async preencherInput(object: any) {
        let formBytes: Uint8Array | Response;
        let pdfDoc: PDFDocument;
        let form: PDFForm;

        if (!String(this.pdf.url).includes("http")) {
            formBytes = readFileSync(this.pdf.url);
            pdfDoc = await PDFDocument.load(formBytes);
            form = pdfDoc.getForm();
        } else {
            formBytes = await fetch(this.pdf.url);
            pdfDoc = await PDFDocument.load(await formBytes.arrayBuffer());
            form = pdfDoc.getForm();
        }

        this.handler(object, form);

        const pdfBytes = await pdfDoc.save();
        const destFile = this.dest;

        writeFileSync(destFile, pdfBytes);
    }
}