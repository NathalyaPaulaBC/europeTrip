export default class MenuModel {
    title: String;
    path?: String;
    active?: boolean;
    childrens?: Array<MenuModel>;

    constructor(p: any) {
        this.title = p?.title ?? null;
        this.path = p?.path ?? null;
        this.active = p?.active ?? false;
        this.childrens = p?.childrens ?? null;
    }
}