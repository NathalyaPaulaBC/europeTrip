export default class ItemModel {
    idPostagem: Number;
    idConteudo: Number;
    ordem: Number;
    texto: String;
    imagem: String;
    posicaoImagem: String;

    constructor(p: any) {
        this.idPostagem = p?.idPostagem ?? 0;
        this.idConteudo = p?.idConteudo ?? 0;
        this.ordem = p?.ordem ?? 1;
        this.texto = p?.texto ?? null;
        this.imagem = p?.imagem ?? null;
        this.posicaoImagem = p?.posicaoImagem ?? null;
    }
}