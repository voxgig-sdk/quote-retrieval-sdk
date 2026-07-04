// Typed models for the QuoteRetrieval SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Quote {
  author: Record<string, any>
  created_at?: string
  id: string
  text: string
}

export interface QuoteLoadMatch {
  id: string
}

export type QuoteListMatch = Partial<Quote>

