import WordPressMadara from './templates/WordPressMadara.mjs';
//dead?
export default class NManhwa extends WordPressMadara {

    constructor() {
        super();
        super.id = 'nmanhwa';
        super.label = 'NManhwa';
        this.tags = [ 'hentai', 'english' ];
        this.url = 'https://nmanhwa.com';
    }
}