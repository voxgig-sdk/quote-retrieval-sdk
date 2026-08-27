<?php
declare(strict_types=1);

// QuoteRetrieval SDK configuration

class QuoteRetrievalConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "QuoteRetrieval",
                "slug" => "quote-retrieval",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://quoterism.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "quote" => [],
                ],
            ],
            "entity" => [
        'quote' => [
          'fields' => [
            [
              'name' => 'author',
              'op' => [
                'list' => [
                  'type' => '`$ANY`',
                ],
              ],
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'createdAt',
              'short' => 'Timestamp when the quote was created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the author',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'short' => 'Name of the author',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'text',
              'req' => true,
              'short' => 'The quote text',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'quote',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 12,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/quotes',
                  'parts' => [
                    'api',
                    'quotes',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'abc123',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/quotes/{id}',
                  'parts' => [
                    'api',
                    'quotes',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.author`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return QuoteRetrievalFeatures::make_feature($name);
    }
}
