Development
===========

<ul>
</ul>

## Getting the code

1.  Fork the repo.
2.  Clone your fork.
3.  Install [Node](https://nodejs.org/en/download/). It comes bundled with [npm](https://www.npmjs.com/).
4.  Install the [dependencies](#dependencies)

## Dependencies

Project dependencies are managed through [npm](https://www.npmjs.com/).

Install dependencies with:

```sh
# cd into the project folder
cd swith
npm i
```

## Serve
We use [@web/dev-server](https://www.npmjs.com/package/@web/dev-server) as development web server. 

```bash
# use the server without install it 
npx es-dev-server --node-resolve --watch

# install dev-dependencies
npm i --also-dev

# run the server
npm run serve
```

```json
{
  "scripts": {
    "serve": "es-dev-server --app-index index.html --node-resolve --watch --open"
  }
}
```