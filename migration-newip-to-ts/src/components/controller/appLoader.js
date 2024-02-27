import Loader from './loader';

class AppLoader extends Loader {
    static API_KEY = 'a2db0eb7b478479fb9dce3efcd99e978';
    constructor() {
        super(process.env.API_URL, {
            // apiKey: 'a2db0eb7b478479fb9dce3efcd99e978',
            apiKey: process.env.API_KEY,
        });
    }
}

export default AppLoader;
