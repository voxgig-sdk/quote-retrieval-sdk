# frozen_string_literal: true

# Typed models for the QuoteRetrieval SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Quote entity data model.
#
# @!attribute [rw] author
#   @return [Hash]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] text
#   @return [String]
Quote = Struct.new(
  :author,
  :created_at,
  :id,
  :text,
  keyword_init: true
)

# Request payload for Quote#load.
#
# @!attribute [rw] id
#   @return [String]
QuoteLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Quote#list.
#
# @!attribute [rw] author
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] text
#   @return [String, nil]
QuoteListMatch = Struct.new(
  :author,
  :created_at,
  :id,
  :text,
  keyword_init: true
)

