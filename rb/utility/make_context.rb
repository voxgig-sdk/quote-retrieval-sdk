# QuoteRetrieval SDK utility: make_context
require_relative '../core/context'
module QuoteRetrievalUtilities
  MakeContext = ->(ctxmap, basectx) {
    QuoteRetrievalContext.new(ctxmap, basectx)
  }
end
