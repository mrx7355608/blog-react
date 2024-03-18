export interface IBlog {
    _id: string;
    title: string;
    slug: string;
    content: string;
    summary: string;
    tags: string[];
    is_published: boolean;
    published_on: string;
}

export interface IBlogInputData {
    title: string;
    content: string;
    tags: string;
    summary: string;
    is_published: string;
}
