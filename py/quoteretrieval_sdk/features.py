# QuoteRetrieval SDK feature factory

from quoteretrieval_sdk.feature.base_feature import QuoteRetrievalBaseFeature
from quoteretrieval_sdk.feature.test_feature import QuoteRetrievalTestFeature


def _make_feature(name):
    features = {
        "base": lambda: QuoteRetrievalBaseFeature(),
        "test": lambda: QuoteRetrievalTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
