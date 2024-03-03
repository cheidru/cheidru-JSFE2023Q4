import './news.css';
import { responseContent } from '../../../types/types';

class News {
    draw(data: responseContent[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            if (newsItemTemp !== null && newsItemTemp instanceof HTMLTemplateElement) {
                const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
                if (newsClone !== null) {
                    if (idx % 2) {
                        const newsItem = newsClone.querySelector('.news__item');
                        if (newsItem !== null) newsItem.classList.add('alt');
                    }

                    const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
                    if (newsMetaPhoto !== null) {
                        newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'src/placeholder-news.jpg'})`;
                    }
                    const newsMetaAuthor = newsClone.querySelector('.news__meta-author');
                    if (newsMetaAuthor !== null) {
                        newsMetaAuthor.textContent = item.author || item.source.name;
                    }

                    const newsMetaDate = newsClone.querySelector('.news__meta-date');
                    if (newsMetaDate !== null) {
                        newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                    }
                    const newsDescriptionTitle = newsClone.querySelector('.news__description-title');
                    if (newsDescriptionTitle !== null) newsDescriptionTitle.textContent = item.title;

                    const newsDescriptionSource = newsClone.querySelector('.news__description-source');
                    if (newsDescriptionSource !== null) newsDescriptionSource.textContent = item.source.name;

                    const newsDescriptionContent = newsClone.querySelector('.news__description-content');
                    if (newsDescriptionContent !== null) newsDescriptionContent.textContent = item.description;

                    const newsReadMore = newsClone.querySelector('.news__read-more a');
                    if (newsReadMore !== null) newsReadMore.setAttribute('href', item.url);
                    fragment.append(newsClone);
                }
            }
        });

        const newsElement = document.querySelector('.news');
        if (newsElement !== null) {
            newsElement.innerHTML = '';
            newsElement.appendChild(fragment);
        }
    }
}

export default News;
