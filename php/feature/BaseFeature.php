<?php
declare(strict_types=1);

// QuoteRetrieval SDK base feature

class QuoteRetrievalBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(QuoteRetrievalContext $ctx, array $options): void {}
    public function PostConstruct(QuoteRetrievalContext $ctx): void {}
    public function PostConstructEntity(QuoteRetrievalContext $ctx): void {}
    public function SetData(QuoteRetrievalContext $ctx): void {}
    public function GetData(QuoteRetrievalContext $ctx): void {}
    public function GetMatch(QuoteRetrievalContext $ctx): void {}
    public function SetMatch(QuoteRetrievalContext $ctx): void {}
    public function PrePoint(QuoteRetrievalContext $ctx): void {}
    public function PreSpec(QuoteRetrievalContext $ctx): void {}
    public function PreRequest(QuoteRetrievalContext $ctx): void {}
    public function PreResponse(QuoteRetrievalContext $ctx): void {}
    public function PreResult(QuoteRetrievalContext $ctx): void {}
    public function PreDone(QuoteRetrievalContext $ctx): void {}
    public function PreUnexpected(QuoteRetrievalContext $ctx): void {}
}
