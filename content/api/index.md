---
title: "Basic Usage"
metaTitle: "How to use the HTTP API"
metaDescription: "How to use Mocksome using the HTTP API"
---

### Endpoint

To record an expectation you must POST to the /__record endpoint.

### General syntax

Each expectation is in the form of request/response

```javascript
{
  "request": {
    ...
  },
  "response": {
    ...
  }
}
```

### Simple example

This shows how to respond to GET /path and response with a 200, and a simple string - "hello"

HTTP API:
```javascript
{
  "request": {
    "method": "GET",
    "path": "/path"
  },
  "response": {
    "statusCode": 200,
    "body": "hello"
  }
}
```
TODO: fill in JS API examples

In fact if you're returning a 200, you can leave the statusCode out. It will default to 200, and if you look in the response it tells you that it's applied
200 as a default value for response.statusCode. There are some other values that are set as sensible defaults.

```
"defaultsApplied": [
        {
            "path": "expectation.times",
            "value": "unlimited"
        },
        {
            "path": "expectation.response.statusCode",
            "value": 200
        },
        ...
    ],
```


### Returning JSON

If you want to return JSON, change the bodyType to JSON and just include it inline.

```javascript
{
  "request": {
    "method": "GET",
    "path": "/path"
  },
  "response": {
    "body": {
      "hello": "goodbye"
    }
  }
}
```

Output:

```bash
% curl http://localhost:8080/path3
{"hello":"goodbye"}                        
```

