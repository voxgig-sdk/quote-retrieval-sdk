# QuoteRetrieval SDK utility: feature_add
module QuoteRetrievalUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
