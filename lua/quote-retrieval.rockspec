package = "voxgig-sdk-quote-retrieval"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/quote-retrieval-sdk.git"
}
description = {
  summary = "QuoteRetrieval SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["quote-retrieval_sdk"] = "quote-retrieval_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
