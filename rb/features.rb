# QuoteRetrieval SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module QuoteRetrievalFeatures
  def self.make_feature(name)
    case name
    when "base"
      QuoteRetrievalBaseFeature.new
    when "test"
      QuoteRetrievalTestFeature.new
    else
      QuoteRetrievalBaseFeature.new
    end
  end
end
