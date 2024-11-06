# playwright-blueprint-tests

this is a blueprint project for using Playwright TS.

## Structure
There are two env files for different environments, one for dev (default) and one for QA. These are specified under config directory. Every value that is included here, it can be used in the tests using `process.env.<key>`, where key is the key used in the property file. 

There are two folders in `tests` directory, containing the playwright tests, `api` and `web`, containing rest api e web ui tests. Under `utils` directory there are utlitily functions that are used in the tests. Anyway feel free to change this structure, if you need to.

## How to run

You can run the tests with
`npx playwright tests`, in this way it will run with dev setup, otherwise you can set `ENV=<my-env>` environment property, in order to load the file `config/.env.<my-env>`.

As alternative you can use the script in `package.json`: `npm test-dev` or `npm test-qa`, for running tests with dev or qa setting. Feel free to add wyour scripts in `package.json` file.

You can also run it with docker (there's a Dockerfile as example)
 or with docker compose: `export ENV=QA;docker compose up`. The results and reports will be created under `/tmp/playwright-results` and `/tmp/playwright-reports`.

