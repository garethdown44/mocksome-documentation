---
title: "API"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

The following is a code block with JavaScript language syntax highlighting.

## Javascript API basics



## Basic usage

```javascript
await client.expectation()
            .with(method('GET'))
            .with(path('/somepath'))
            .response(responses.json.ok({ hello: 'goodbye' }))
            .create();
```
