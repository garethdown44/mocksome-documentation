const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://docs.mocksome.com",
		"gaTrackingId": null
	},
	"header": {
		"logo": "",
		"logoLink": "https://www.mocksome.com",
		"title": "Mocksome Documentation",
		"githubUrl": "https://github.com/mocksome",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": true,
			"indexName": "mocksome-docs", 
			"algoliaAppId": 'DBQGSCFP0B', // process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": 'a4d4f42a5d071042e1e0c3dc764db03c', //process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": '41ba9dad939e8c6e59bfee9db4d657eb', //process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/api"
		],
		"links": [
			// { "text": "Hasura", "link": "https://hasura.io"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Mocksome",
		"description": "Mocksome. Documentation site for Mocksome HTTP Mocking Server",
		"ogImage": null,
		"docsLocation": "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
	},
};

module.exports = config;
