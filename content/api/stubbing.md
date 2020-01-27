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
        "name": "Product {{this}}",
        "description": "Description for Product {{this}}"
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

Then it's 

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
    "generatorRange": [1, 1000],
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

This would give you



### String templates

You might have to use these when you have a number or a boolean.

```javascript


```

### Other generators - e.g. firstname, lastname, email

```javascript
{
  "request": {
    "path": "/users"
  },
  "response": {
    "mode": "stub",
    "templateType": "st",
    "generatorRange": [1, 10],
    "template": {
      "{{#each sequence}}": {
      	"id": "{{this}}"
        "name": "{{this.generate.firstName()}}"
      }
    }
  }
}
```