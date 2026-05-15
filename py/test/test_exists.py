# ProjectName SDK exists test

import pytest
from quoteretrieval_sdk import QuoteRetrievalSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = QuoteRetrievalSDK.test(None, None)
        assert testsdk is not None
