
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { QuoteRetrievalSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await QuoteRetrievalSDK.test()
    equal(null !== testsdk, true)
  })

})
