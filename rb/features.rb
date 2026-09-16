# QuoteRetrieval SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module QuoteRetrievalFeatures
  def self.make_feature(name)
    case name
    when "base"
      QuoteRetrievalBaseFeature.new
    when "ratelimit"
      QuoteRetrievalRatelimitFeature.new
    when "retry"
      QuoteRetrievalRetryFeature.new
    when "test"
      QuoteRetrievalTestFeature.new
    when "timeout"
      QuoteRetrievalTimeoutFeature.new
    else
      QuoteRetrievalBaseFeature.new
    end
  end
end
