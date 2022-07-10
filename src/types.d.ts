
export type InputParaCopiar = {
    url: string,
    paginas: number[]
}

export interface PDFRepository {
    get obterInputs(): Record<string, unknown>;
    preencherInput(
        object: FormInput | LMEInput | ReceitaInput | TCLEInput | RiscoInput,
    ): Promise<void>;
    set alterarOutput(path: string);
}

export interface CopiarPDFRepository {
    copiar(input: unknown): Promise<void>
}
