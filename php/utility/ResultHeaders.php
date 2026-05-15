<?php
declare(strict_types=1);

// QuoteRetrieval SDK utility: result_headers

class QuoteRetrievalResultHeaders
{
    public static function call(QuoteRetrievalContext $ctx): ?QuoteRetrievalResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
