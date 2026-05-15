<?php
declare(strict_types=1);

// QuoteRetrieval SDK exists test

require_once __DIR__ . '/../quoteretrieval_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = QuoteRetrievalSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
