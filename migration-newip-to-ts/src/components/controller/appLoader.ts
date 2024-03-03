import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(
            // Прокси News API сервера для использования в задеплоенной версии,
            // вместо 'https://newsapi.org/v2/'
            'https://rss-news-api.onrender.com/',

            { apiKey: 'a2db0eb7b478479fb9dce3efcd99e978' }
        );
    }
}

export default AppLoader;
