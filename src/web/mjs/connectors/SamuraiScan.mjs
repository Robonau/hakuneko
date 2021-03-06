import MangaReaderCMS from './templates/MangaReaderCMS.mjs';

export default class SamuraiScan extends MangaReaderCMS {

    constructor() {
        super();
        super.id = 'samuraiscan';
        super.label = 'Samurai Scan';
        this.tags = [ 'webtoon', 'spanish' ];
        this.url = 'https://samuraiscan.com';
        this.links = {
            login: 'https://samuraiscan.com/auth/login'
        };

        this.queryChapters = 'div.chapters h3.chapter-title a';
    }
}