<?php
declare(strict_types=1);

// QuoteRetrieval SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

QuoteRetrievalUtility::setRegistrar(function (QuoteRetrievalUtility $u): void {
    $u->clean = [QuoteRetrievalClean::class, 'call'];
    $u->done = [QuoteRetrievalDone::class, 'call'];
    $u->make_error = [QuoteRetrievalMakeError::class, 'call'];
    $u->feature_add = [QuoteRetrievalFeatureAdd::class, 'call'];
    $u->feature_hook = [QuoteRetrievalFeatureHook::class, 'call'];
    $u->feature_init = [QuoteRetrievalFeatureInit::class, 'call'];
    $u->fetcher = [QuoteRetrievalFetcher::class, 'call'];
    $u->make_fetch_def = [QuoteRetrievalMakeFetchDef::class, 'call'];
    $u->make_context = [QuoteRetrievalMakeContext::class, 'call'];
    $u->make_options = [QuoteRetrievalMakeOptions::class, 'call'];
    $u->make_request = [QuoteRetrievalMakeRequest::class, 'call'];
    $u->make_response = [QuoteRetrievalMakeResponse::class, 'call'];
    $u->make_result = [QuoteRetrievalMakeResult::class, 'call'];
    $u->make_point = [QuoteRetrievalMakePoint::class, 'call'];
    $u->make_spec = [QuoteRetrievalMakeSpec::class, 'call'];
    $u->make_url = [QuoteRetrievalMakeUrl::class, 'call'];
    $u->param = [QuoteRetrievalParam::class, 'call'];
    $u->prepare_auth = [QuoteRetrievalPrepareAuth::class, 'call'];
    $u->prepare_body = [QuoteRetrievalPrepareBody::class, 'call'];
    $u->prepare_headers = [QuoteRetrievalPrepareHeaders::class, 'call'];
    $u->prepare_method = [QuoteRetrievalPrepareMethod::class, 'call'];
    $u->prepare_params = [QuoteRetrievalPrepareParams::class, 'call'];
    $u->prepare_path = [QuoteRetrievalPreparePath::class, 'call'];
    $u->prepare_query = [QuoteRetrievalPrepareQuery::class, 'call'];
    $u->result_basic = [QuoteRetrievalResultBasic::class, 'call'];
    $u->result_body = [QuoteRetrievalResultBody::class, 'call'];
    $u->result_headers = [QuoteRetrievalResultHeaders::class, 'call'];
    $u->transform_request = [QuoteRetrievalTransformRequest::class, 'call'];
    $u->transform_response = [QuoteRetrievalTransformResponse::class, 'call'];
});
