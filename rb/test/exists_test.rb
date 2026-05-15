# QuoteRetrieval SDK exists test

require "minitest/autorun"
require_relative "../QuoteRetrieval_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = QuoteRetrievalSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
