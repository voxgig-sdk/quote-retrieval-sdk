-- Typed models for the QuoteRetrieval SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Quote
---@field author table
---@field created_at? string
---@field id string
---@field text string

---@class QuoteLoadMatch
---@field id string

---@class QuoteListMatch
---@field author? table
---@field created_at? string
---@field id? string
---@field text? string

local M = {}

return M
