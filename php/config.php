<?php
declare(strict_types=1);

// QuoteRetrieval SDK configuration

class QuoteRetrievalConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "QuoteRetrieval",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://quoterism.com",
                "auth" => [
                    "prefix" => "Bearer",
                ],
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
                  'req' => false,
                  'type' => '`$ANY`',
                ],
              ],
              'req' => true,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'created_at',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'text',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
          ],
          'name' => 'quote',
          'op' => [
            'list' => [
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
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                    ],
                  ],
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
            'load' => [
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
                        'active' => true,
                      ],
                    ],
                  ],
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
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
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
