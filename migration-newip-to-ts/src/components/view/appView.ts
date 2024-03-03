import News from './news/news';
import Sources from './sources/sources';
import { responseContent, sourceResponseContent } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: responseContent) {
        const values = data?.articles ? data?.articles : ([] as responseContent[]);
        this.news.draw(values as responseContent[]);
    }

    drawSources(data: sourceResponseContent) {
        const values = data?.sources ? data?.sources : ([] as sourceResponseContent[]);
        this.sources.draw(values as sourceResponseContent[]);
    }
}

export default AppView;
