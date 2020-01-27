---
title: "Matching requests"
metaTitle: "How to use the HTTP API"
metaDescription: "How to use Mocksome using the HTTP API"
---

### What you can match on

These are the elements of the request you can use to match. You must provide at least one of them.

```javascript
{
  "request": {
    "method": "POST",
    "path": "/...",
    "query": {
      "var": "value"
    },
    "headers": {
      "x-some-header": "some-value"
    },
    "body": {
      "somekey": "somevalue"
    }
  }
}
```