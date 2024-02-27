import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(process.env.API_URL, {
            apiKey: a2db0eb7b478479fb9dce3efcd99e978,
            // apiKey: process.env.API_KEY,
        });
    }
}

export default AppLoader;
