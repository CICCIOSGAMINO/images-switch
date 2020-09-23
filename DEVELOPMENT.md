Development
===========

<ul>
</ul>

## Getting the code

1.  Fork the repo.
2.  Clone your fork.
3.  Install [Node](https://nodejs.org/en/download/). It comes bundled with [yarn](https://yarnpkg.com/).
4.  Install the [dependencies](#dependencies)

## Dependencies

Project dependencies are managed through [Yarn](https://yarnpkg.com/lang/en/docs/install).

Install dependencies with:

```sh
yarn
```

## Serve
We use [ed dev server](https://github.com/open-wc/open-wc/tree/master/packages/es-dev-server) a web server for development without bundling. 

```bash
# use the server without install it 
npx es-dev-server --node-resolve --watch

# install 
npm i --save-dev es-dev-server
```

Add scripts to your package.json, modify the flags as needed:

```json
{
  "scripts": {
    "start": "es-dev-server --app-index index.html --node-resolve --watch --open"
  }
}
```

And run the server: 

```bash
npm run start
```