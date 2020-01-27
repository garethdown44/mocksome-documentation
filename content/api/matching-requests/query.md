---
title: "Query"
metaTitle: "How to use the HTTP API"
metaDescription: "How to use Mocksome using the HTTP API"
---

#### Includes matching

This is the default behaviour if you don't set a queryMatchType

```javascript
"path": "/path"
"query": {
  "one": 1,
  "two": "value2"
}
```

This will match:

/path?one=1&two=value2

(Note that for numbers both string and number types will work).

Includes is the default queryMatchType so this is functionally equivalent to doing:

```javascript
"path": "/path"
"queryMatchType": "includes",
"query": {
  "one": 1,
  "two": "value2"
}
```

This would match /path?one=1&two=2

#### Exact matching

With exact matching it will only match if all of the parameters are present, with their values

```javascript
"path": "/path",
"queryMatchType": 'includes',
"query": {
  "one": 1,
  "two": 2
}
```

#### Starts with matching on specific values

```javascript
path: "/path",
query: {
  one: { $startswith: 'val' }
}
```

This would match:

```
/path?one=value1
```

#### Regex matching on specific values

```javascript
path: "/path",
query: {
  one: { $regex: 'lue1' }
}
```

This would match:

```
/path?one=value1
```