package core

type QuoteRetrievalError struct {
	IsQuoteRetrievalError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewQuoteRetrievalError(code string, msg string, ctx *Context) *QuoteRetrievalError {
	return &QuoteRetrievalError{
		IsQuoteRetrievalError: true,
		Sdk:              "QuoteRetrieval",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *QuoteRetrievalError) Error() string {
	return e.Msg
}
