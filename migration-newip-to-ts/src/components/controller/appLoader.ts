import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(
            // 'https://newsapi.org/v2/top-headlines/',
            'https://newsapi.org',

            { apiKey: 'a2db0eb7b478479fb9dce3efcd99e978', }
        );
    }
}

export default AppLoader;
