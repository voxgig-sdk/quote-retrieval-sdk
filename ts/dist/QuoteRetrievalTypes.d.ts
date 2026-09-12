export interface Quote {
    author: Record<string, any>;
    createdAt?: string;
    id: string;
    name: string;
    text: string;
}
export interface QuoteLoadMatch {
    id: string;
}
export interface QuoteListMatch {
    limit?: number;
    page?: number;
}
