<?php
declare(strict_types=1);

// QuoteRetrieval SDK utility: prepare_body

class QuoteRetrievalPrepareBody
{
    public static function call(QuoteRetrievalContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
