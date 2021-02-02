import MangaReaderCMS from './templates/MangaReaderCMS.mjs';

export default class TuMangaOnlineFun extends MangaReaderCMS {

    constructor() {
        super();
        super.id = 'tumangaonlinefun';
        super.label = 'TuMangaOnline Fun';
        this.tags = [ 'manga', 'webtoon', 'spanish' ];
        this.url = 'http://tumangaonline.fun';
        this.links = {
            login: 'http://tusmangasonline.com/admin/login'
        };

        this.language = 'es';
    }
}