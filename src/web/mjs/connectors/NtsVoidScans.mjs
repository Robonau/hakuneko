import WordPressMadara from './templates/WordPressMadara.mjs';
//dead?
export default class NtsVoidScans extends WordPressMadara {

    constructor() {
        super();
        super.id = 'ntsvoidscans';
        super.label = 'Void Scans';
        this.tags = [ 'manga', 'webtoon', 'english' ];
        this.url = 'https://voidscans.com';
    }
}