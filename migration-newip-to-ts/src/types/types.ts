interface requestParams {
    apiKey: string;
    q?: string;
    sources?: sourceRequestParams;
    pageSize?: number;
    page?: number;
}

export interface everythingRequest extends requestParams {
    searchIn?: string;
    domains?: string;
    excludeDomains?: string;
    from?: Date;
    to?: Date;
    language?: string;
    sortBy?: string;
}

export interface headlinesRequest extends requestParams {
    country?: string;
    category?: string;
}

// the same set of response types for Everything and Top Headlines
export interface responseContent {
    status: string;
    totalResults: number;
    articles: string[];
    source: newsSRC;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

interface newsSRC {
    id: string;
    name: string;
}

export enum searchInOption {
    title,
    description,
    content,
}

export enum categoryOption {
    business,
    entertainment,
    general,
    health,
    science,
    sports,
    technology,
}

export enum languageOption {
    ar, de, en, es, fr, he, it, nl, no, pt, ru, sv, ud, zh,
}

export enum countryOption {
    ae, ar, at, au, be, bg, br, ca, ch, cn, co, cu, cz, de, eg, fr, 
    gb, gr, hk, hu, id, ie, il, in, it, jp, kr, lt, lv, ma, mx, my, 
    ng, nl, no, nz, ph, pl, pt, ro, rs, ru, sa, se, sg, si, sk, th, 
    tr, tw, ua, us, ve, za,
}

export enum sortbyOption {
    relevancy,
    popularity,
    publishedAt,
}

export enum endpoints {
    everything = '/v2/everything',
    topHeadlines = '/v2/top-headlines',
    sources = '/v2/top-headlines/sources',
}

interface sourceRequestParams {
    apiKey: string;
    category?: string;
    language?: string;
    country?: string;
}

export interface sourceResponseContent {
    status: string;
    sources: string[];
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
