package voxgigquoteretrievalsdk

import (
	"github.com/voxgig-sdk/quote-retrieval-sdk/core"
	"github.com/voxgig-sdk/quote-retrieval-sdk/entity"
	"github.com/voxgig-sdk/quote-retrieval-sdk/feature"
	_ "github.com/voxgig-sdk/quote-retrieval-sdk/utility"
)

// Type aliases preserve external API.
type QuoteRetrievalSDK = core.QuoteRetrievalSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type QuoteRetrievalEntity = core.QuoteRetrievalEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type QuoteRetrievalError = core.QuoteRetrievalError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewQuoteEntityFunc = func(client *core.QuoteRetrievalSDK, entopts map[string]any) core.QuoteRetrievalEntity {
		return entity.NewQuoteEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewQuoteRetrievalSDK = core.NewQuoteRetrievalSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
