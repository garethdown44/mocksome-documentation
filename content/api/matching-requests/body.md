---
title: "Body"
metaTitle: "How to use the HTTP API"
metaDescription: "How to use Mocksome using the HTTP API"
---

### Body matching

#### Body Type

You may set the bodyType to force a particular type of match. This can be 'string' or 'json'.

Mocksome will also infer the body type based on what you provide and/or the content-type header, but if you want to be absolutely sure, you can specify the bodyType, e.g.:

```
{
  "bodyType": "json",
  "body": {
    "some_key": "some_value"
  }
}
```

#### bodyMatchType

There are two body matching options. There is 'includes' and 'exact'.

If there was a request with this body:

```javascript
{
  "product": {
    "title": "Turbomop",
    "description": "Awesome electric mop"
  },
  "categories": [
    { id: 1, name: "Mops" },
    { id: 2, name: "Home" }
  ]
}
```

You could specify just part of the body, and it would be matched. e.g.:

```javascript
{
  path: "/somepath",
  body: {
    "product": {
      "name": "Turbomop"
    }
  }
}
```

#### Exact JSON matching

You can do exact matching:

```javascript
{
  path: "/somepath",
  bodyMatchType: 'exact',
  body: { 
    product: { 
      name: "Turbomop", 
      description: "Awesome mop" 
    }, 
    categories: [ { id: 1, name: "Mops" }, { id: 2, name: "Home" } ] }
}
```

This would match:

```javascript
{
    "product": {
        "name": "Turbomop",
        "description": "Awesome mop"
    },
    "categories": [
        {
            "id": 1,
            "name": "Mops"
        },
        {
            "id": 2,
            "name": "Home"
        }
    ]
}
```

#### Multipart/form matching

```javascript
{
  path: "/somepath",
  body: {
    one: 'two',
    three: 'four',
  },
  bodyType: 'form'
}
```

You can test this out with:

```bash
curl --location --request POST 'localhost:8080/path' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'one=two'
```

#### String matching

You can do exact matching:

```javascript
{
  path: "/somepath",
  bodyMatchType: 'exact',
  body: { 
    product: { 
      name: "Turbomop", 
      description: "Awesome mop" 
    }, 
    categories: [ { id: 1, name: "Mops" }, { id: 2, name: "Home" } ] }
}
```

This would match:

```javascript
{
    "product": {
        "name": "Turbomop",
        "description": "Awesome mop"
    },
    "categories": [
        {
            "id": 1,
            "name": "Mops"
        },
        {
            "id": 2,
            "name": "Home"
        }
    ]
}
```

And includes string matching:

```javascript
{
  path: "/somepath",
  body: 'hello',
  bodyType: 'string',
  bodyMatchType: 'includes'
}
```