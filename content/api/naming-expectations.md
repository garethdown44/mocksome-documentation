---
title: "Naming Expectations"
metaTitle: "How to use the HTTP API"
metaDescription: "How to use Mocksome using the HTTP API"
---

You can give an expectation a name which can make it easier to identify them.

```javascript
{
  "name": "Catch all gets",
  "request": {
    "method": "GET"
  },
  "response": {
    "statusCode": 200
  }
}
```