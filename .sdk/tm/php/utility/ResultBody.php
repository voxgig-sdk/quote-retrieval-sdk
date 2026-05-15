<?php
declare(strict_types=1);

// QuoteRetrieval SDK utility: result_body

class QuoteRetrievalResultBody
{
    public static function call(QuoteRetrievalContext $ctx): ?QuoteRetrievalResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
