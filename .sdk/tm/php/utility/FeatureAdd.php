<?php
declare(strict_types=1);

// QuoteRetrieval SDK utility: feature_add

class QuoteRetrievalFeatureAdd
{
    public static function call(QuoteRetrievalContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
