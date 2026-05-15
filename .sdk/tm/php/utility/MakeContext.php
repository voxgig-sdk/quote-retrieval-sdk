<?php
declare(strict_types=1);

// QuoteRetrieval SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class QuoteRetrievalMakeContext
{
    public static function call(array $ctxmap, ?QuoteRetrievalContext $basectx): QuoteRetrievalContext
    {
        return new QuoteRetrievalContext($ctxmap, $basectx);
    }
}
