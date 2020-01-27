---
title: "Path"
metaTitle: "How to use the HTTP API"
metaDescription: "How to use Mocksome using the HTTP API"
---

#### Basic

```javascript
"path": "/posts"
```

#### Starts with matching

```javascript
"path": { "$startswith": "/pr" }
```

This would match /prose, /products etc

#### Regex matching

```javascript
"path": { "$regex": "rod" }
```

#### Parameter based matching

```javascript
"path": "/posts/:id"
```