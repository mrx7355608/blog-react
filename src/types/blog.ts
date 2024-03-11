export interface IBlog {
    title: string;
    slug: string;
    content: string;
    summary: string;
    tags: string[];
    is_published: boolean;
    published_on: string;
}
