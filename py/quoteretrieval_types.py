# Typed models for the QuoteRetrieval SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Quote:
    author: dict
    id: str
    text: str
    created_at: Optional[str] = None


@dataclass
class QuoteLoadMatch:
    id: str


@dataclass
class QuoteListMatch:
    author: Optional[dict] = None
    created_at: Optional[str] = None
    id: Optional[str] = None
    text: Optional[str] = None

