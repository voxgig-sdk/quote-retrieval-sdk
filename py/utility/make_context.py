# QuoteRetrieval SDK utility: make_context

from core.context import QuoteRetrievalContext


def make_context_util(ctxmap, basectx):
    return QuoteRetrievalContext(ctxmap, basectx)
