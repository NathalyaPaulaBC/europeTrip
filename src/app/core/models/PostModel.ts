import ItemModel from "./ItemModel";
import { Menu } from '../../domain/config/menu';

export default class PostModel {
    idPostagem: Number;
    titulo: String;
    subtitulo: String;
    menu: Menu;
    dataPostagem: Date;
    imagem: String;
    conteudo: Array<ItemModel>;

    constructor (p? : any) {
        this.idPostagem = p?.idPostagem ?? 0;
        this.titulo = p?.titulo ?? null;
        this.subtitulo = p?.subtitulo ?? null;
        this.menu = p?.menu ?? Menu.MONACO;
        this.dataPostagem = p?.dataPostagem ?? new Date();
        this.imagem = p?.imagem ?? null;
        this.conteudo = p?.conteudo ?? new Array<ItemModel>();
    }
}