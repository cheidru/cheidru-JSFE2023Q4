export type CallbackFunction<T> = (data: T) => void;

class Loader {
    _baseLink: string;
    _options: object;
   
    constructor(baseLink: string, options: object) {
        this._baseLink = baseLink;
        this._options = options;
    }

    getResp<T>({ endpoint, options = {} }: {endpoint: string, options: object},
        callback: CallbackFunction<T> = () => {console.error('No callback for GET response');}
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: object, endpoint: string) {
        const urlOptions: object = { ...this._options, ...options };
        let url = `${this._baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof object]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: CallbackFunction<T>, options: object = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
