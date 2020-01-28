---
title: "Stubbing"
metaTitle: "How to use the HTTP API"
metaDescription: "How to use Mocksome using the HTTP API"
---

You can do templated responses with Mocksome, and you can use parameters from the request.

There are two template engines built into Mocksome. ST and Handlebars. Handlebars is not that useful for generating JSON.

The docs for ST are here: https://github.com/SelectTransform/st.js

### A simple example

Here the path parameter from the request is played back in the template

```javascript
{
  "request": {
    "path": "/products/:id"
  },
  "response": {
    "mode": "stub",
    "templateType": "st",
    "template": {
      name: "Product {{this.request.params.id}}",
      description: "Description for product {{this.request.params.id}}"
    }
  }
}
```

#### Response:

```javascript
{
    "name": "Product 1",
    "description": "Description for product 1"
}
```

### Using generators

Here the path parameter from the request is played back in the template

```javascript
{
  "request": {
    "path": "/products"
  },
  "response": {
    "mode": "stub",
    "templateType": "st",
    "generatorRange": [1, 5],
    "template": {
      "{{#each sequence}}": {
        "name": "Product {{this.item}}",
        "description": "Description for Product {{this.item}}"
      }
    }
  }
}
```

#### Response:

```javascript
[
    {
        "name": "Product 1",
        "description": "Description for Product 1"
    },
    {
        "name": "Product 2",
        "description": "Description for Product 2"
    },
    {
        "name": "Product 3",
        "description": "Description for Product 3"
    },
    {
        "name": "Product 4",
        "description": "Description for Product 4"
    },
    {
        "name": "Product 5",
        "description": "Description for Product 5"
    }
]
```

### Paging example

This might be a bit daunting to look at but we'll talk through it. What it's saying is that it will handle any request to users that's in the form of
`/users?page=2&limit=10`

It's got number regexes for both the `page` and `limit` query params.

Then we say that the range is 1 to 200 (the max number just needs to be the highest possible amount in your UI. If you let people show 200 results, then set it to 200).

Then we loop over the sequence, but only as high as the `limit` query parameter. Then, in order to give everything the correct number we multiply the page by the number of results per page (the limit).

```javascript
{
  "request": {
    "path": "/users",
    "query": {
    	"page": { "$regex": "[0-9]" },
    	"limit": { "$regex": "[0-9]" }
    }
  },
  "response": {
    "mode": "stub",
    "templateType": "st",
    "generatorRange": [1, 100],
    "template": {
      	"{{#each sequence}}": [{
	      	"{{#if this.item <= this.request.query.limit}}": {
	      		"id": "{{Number(this.item + ( (this.request.query.page - 1) * this.request.query.limit))}}",
	        	"name": "User {{this.item + ( (this.request.query.page - 1) * this.request.query.limit)}}"
	      	}
      	}]
    }
  }
}
```

This would give you:

`/users?page=2&limit=5`

```javascript
[
  { "id": 6, "name": "User 6" },
  { "id": 7, "name": "User 7" },
  { "id": 8, "name": "User 8" },
  { "id": 9, "name": "User 9" },
  { "id": 10, "name": "User 10" },
]
```

### Other generators

Coming soon!