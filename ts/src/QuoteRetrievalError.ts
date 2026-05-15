
import { Context } from './Context'


class QuoteRetrievalError extends Error {

  isQuoteRetrievalError = true

  sdk = 'QuoteRetrieval'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  QuoteRetrievalError
}

