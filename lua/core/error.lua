-- QuoteRetrieval SDK error

local QuoteRetrievalError = {}
QuoteRetrievalError.__index = QuoteRetrievalError


function QuoteRetrievalError.new(code, msg, ctx)
  local self = setmetatable({}, QuoteRetrievalError)
  self.is_sdk_error = true
  self.sdk = "QuoteRetrieval"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function QuoteRetrievalError:error()
  return self.msg
end


function QuoteRetrievalError:__tostring()
  return self.msg
end


return QuoteRetrievalError
