import AppLoader from './appLoader';
import { CallbackFunction } from 'loader';
import { responseContent, sourceResponseContent } from '../../types/index';

class AppController extends AppLoader {
    getSources(callback: CallbackFunction<sourceResponseContent>) {
        super.getResp(
            {endpoint: 'sources',},
            callback
        );
    }

    getNews(e: Event, callback: CallbackFunction<responseContent>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer && target !== null) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId && sourceId !== null) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
