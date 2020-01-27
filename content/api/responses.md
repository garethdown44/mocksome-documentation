---
title: "Responses"
metaTitle: "How to use the HTTP API"
metaDescription: "How to use Mocksome using the HTTP API"
---

### Basic structure

You can include a statusCode, body and a delay. You must include at least one component.

```javascript
{
  "request": {
    ...
  }
  "response": {
    statusCode: 201,
    headers: {

    },
    body: {
      "key": "value"
    },
    delay: 200
  }
}
```

### Standard response body types

You can return json or text easily. The statusCode defaults to 200.

#### JSON:

```javascript
"response": {
  "body": {
    "key": "value"
  }
}
```

#### TEXT:

```javascript
"response": {
  "body": "some text"
}
```

### Response headers

```javascript
"response": {
  "body": "some text",
  "headers": {
    "x-some-header": "some value"
  }
}
```

### Other content types

The body type can be anything you want, you just need to specify the content-type header.

For example, for XML:

```javascript
"response": {
  "headers": {
    "content-type": "text/xml"
  },
  "body": "<?xml version='1.0'><root><hello /></root>"
}
```

### Delays

A delay can be introduced by setting a delay value. This is in milliseconds.

To set a 2 second delay:

```javascript
"response": {
  "body": "the response...",
  "delay": 2000
}
```