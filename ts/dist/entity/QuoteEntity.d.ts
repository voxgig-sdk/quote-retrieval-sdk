import { QuoteRetrievalEntityBase } from '../QuoteRetrievalEntityBase';
import type { QuoteRetrievalSDK } from '../QuoteRetrievalSDK';
import type { Control } from '../types';
import type { Quote, QuoteLoadMatch, QuoteListMatch } from '../QuoteRetrievalTypes';
declare class QuoteEntity extends QuoteRetrievalEntityBase<Quote> {
    constructor(client: QuoteRetrievalSDK, entopts: any);
    make(this: QuoteEntity): QuoteEntity;
    load(this: any, reqmatch?: QuoteLoadMatch, ctrl?: Control): Promise<QuoteEntity>;
    list(this: any, reqmatch?: QuoteListMatch, ctrl?: Control): Promise<QuoteEntity[]>;
}
export { QuoteEntity };
