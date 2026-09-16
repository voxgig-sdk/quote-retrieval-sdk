# QuoteRetrieval SDK feature factory

from quoteretrieval_sdk.feature.base_feature import QuoteRetrievalBaseFeature
from quoteretrieval_sdk.feature.ratelimit_feature import QuoteRetrievalRatelimitFeature
from quoteretrieval_sdk.feature.retry_feature import QuoteRetrievalRetryFeature
from quoteretrieval_sdk.feature.test_feature import QuoteRetrievalTestFeature
from quoteretrieval_sdk.feature.timeout_feature import QuoteRetrievalTimeoutFeature


_FEATURES = {
    "base": lambda: QuoteRetrievalBaseFeature(),
    "ratelimit": lambda: QuoteRetrievalRatelimitFeature(),
    "retry": lambda: QuoteRetrievalRetryFeature(),
    "test": lambda: QuoteRetrievalTestFeature(),
    "timeout": lambda: QuoteRetrievalTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
