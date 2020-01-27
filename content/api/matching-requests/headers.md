---
title: "Headers"
metaTitle: "How to use the HTTP API"
metaDescription: "How to use Mocksome using the HTTP API"
---

#### Includes matching

This is the default behaviour if you don't set a *headersMatchType*

```javascript
"path": "/path"
"headers": {
  "one": "two"
}
```

This would match if there was a header *'one: two'* in the request.

*'includes'* is the default *headersMatchType* so this is functionally equivalent to doing:

```javascript
"path": "/path"
"headersMatchType": "includes",
"query": {
  "one": "two",
}
```

#### Starts with matching on specific values

```javascript
path: "/path",
headers: {
  one: { $startswith: 'val' }
}
```

This would match if you had a header like:

```
one: value1
```

#### Regex matching on specific values

```javascript
path: "/path",
headers: {
  one: { $regex: 'lue1' }
}
```

This would match if you had a header:

```
one: value1
```

#### Exact matching

With exact matching it will only match if all of the headesr are present, with their values

```javascript
"path": "/path",
"queryMatchType": 'includes',
"query": {
  "one": 1
}
```

This is probably not that useful for headers in practice, since there are some headers that get added in that might not be so predictable, or that might change betweem separate requests. However, you can still use regexes and startswith, so you could do something like this:

```
  path: "/somepath",
  headersMatchType: 'exact',
  headers: {
    "host": { $startswith: '127.0.0.1' },
    "accept-encoding":"gzip, deflate",
    "user-agent": { "$regex": ".*" },
    "connection": { "$regex": ".*" },
    "one":"two"
  }
```