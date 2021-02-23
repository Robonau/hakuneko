import Connector from '../engine/Connector.mjs';
import Manga from '../engine/Manga.mjs';

export default class ComicClear extends Connector {

    constructor() {
        super();
        super.id = 'comick';
        super.label = 'ComicK';
        this.tags = [ 'manga', 'multi-lingual', 'webtoon', ];
        this.url = 'https://comick.fun/';
        this.api = 'https://comick.fun/_next/data/AicdyaUvMtk8zzRn5NZXm';
    }

    async _getMangaFromURI(uri) {
        let id = uri.pathname;
        let request = new Request(this.api + id + '.json', this.requestOptions);
        let data = await this.fetchJSON(request);
        let title = data.pageProps.comic.title;
        return new Manga(this, id, title);
    }

    async _getMangas() {
    }

    async _getChapters(manga) {
        let request = new Request(this.api + manga.id + '.json', this.requestOptions);
        let data = await this.fetchJSON(request);
        return data.pageProps.comic.md_chapters.map(ele => {
            let title = '';
            if(ele.vol) { // => string, not a number
                title += 'Vol.' + ele.vol;
            }
            if(ele.chap) { // => string, not a number
                title += ' Ch.' + ele.chap;
            }
            if(ele.title) {
                title += (title ? ' - ' : '') + ele.title;
            }
            if(ele.langName) {
                title += ' (' + ele.langName + ')';
            }
            if(ele.group_name.length) {
                title += ' [' + ele.group_name.join(', ') + ']';
            }
            return {
                id: manga.id + '/'+ele.id+'-chapter-'+ele.chapter+'-'+ele.iso639_1,
                title: title,
                language: ele.langName
            };
        });
    }

    async _getPages(chapter) {
        let request = new Request(this.api + chapter.id + '.json', this.requestOptions);
        let data = await this.fetchJSON(request);
        return data.pageProps.chapter.md_images.map(ele => 'https://lh3.googleusercontent.com/'+ele.gpurl+'=w'+ele.w+'-h'+ele.h);
    }
}