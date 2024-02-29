export interface requestParam {
    apiKey: string;
    category: string;
    language: string;
    country: string;
}

export interface responseData {
    status: string;
    sources: Array<sourceObject>;
}

export interface sourceObject {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}