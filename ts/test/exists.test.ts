
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { QuoteRetrievalSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = QuoteRetrievalSDK.test()
    equal(testsdk instanceof QuoteRetrievalSDK, true,
      'QuoteRetrievalSDK.test() must return a client synchronously')
  })

})
