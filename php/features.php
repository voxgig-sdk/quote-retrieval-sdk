<?php
declare(strict_types=1);

// QuoteRetrieval SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class QuoteRetrievalFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new QuoteRetrievalBaseFeature();
            case "test":
                return new QuoteRetrievalTestFeature();
            default:
                return new QuoteRetrievalBaseFeature();
        }
    }
}
