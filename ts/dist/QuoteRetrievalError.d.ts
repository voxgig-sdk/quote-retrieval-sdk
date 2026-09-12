import { Context } from './Context';
declare class QuoteRetrievalError extends Error {
    isQuoteRetrievalError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { QuoteRetrievalError };
