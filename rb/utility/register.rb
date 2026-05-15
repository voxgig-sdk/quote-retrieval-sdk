# QuoteRetrieval SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

QuoteRetrievalUtility.registrar = ->(u) {
  u.clean = QuoteRetrievalUtilities::Clean
  u.done = QuoteRetrievalUtilities::Done
  u.make_error = QuoteRetrievalUtilities::MakeError
  u.feature_add = QuoteRetrievalUtilities::FeatureAdd
  u.feature_hook = QuoteRetrievalUtilities::FeatureHook
  u.feature_init = QuoteRetrievalUtilities::FeatureInit
  u.fetcher = QuoteRetrievalUtilities::Fetcher
  u.make_fetch_def = QuoteRetrievalUtilities::MakeFetchDef
  u.make_context = QuoteRetrievalUtilities::MakeContext
  u.make_options = QuoteRetrievalUtilities::MakeOptions
  u.make_request = QuoteRetrievalUtilities::MakeRequest
  u.make_response = QuoteRetrievalUtilities::MakeResponse
  u.make_result = QuoteRetrievalUtilities::MakeResult
  u.make_point = QuoteRetrievalUtilities::MakePoint
  u.make_spec = QuoteRetrievalUtilities::MakeSpec
  u.make_url = QuoteRetrievalUtilities::MakeUrl
  u.param = QuoteRetrievalUtilities::Param
  u.prepare_auth = QuoteRetrievalUtilities::PrepareAuth
  u.prepare_body = QuoteRetrievalUtilities::PrepareBody
  u.prepare_headers = QuoteRetrievalUtilities::PrepareHeaders
  u.prepare_method = QuoteRetrievalUtilities::PrepareMethod
  u.prepare_params = QuoteRetrievalUtilities::PrepareParams
  u.prepare_path = QuoteRetrievalUtilities::PreparePath
  u.prepare_query = QuoteRetrievalUtilities::PrepareQuery
  u.result_basic = QuoteRetrievalUtilities::ResultBasic
  u.result_body = QuoteRetrievalUtilities::ResultBody
  u.result_headers = QuoteRetrievalUtilities::ResultHeaders
  u.transform_request = QuoteRetrievalUtilities::TransformRequest
  u.transform_response = QuoteRetrievalUtilities::TransformResponse
}
