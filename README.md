# Swap

###### Check the latest build: https://swap-93d9f.web.app/
###### Check the latest coverage report: https://

### Start a local server:

- run `cd swap` 
- run `yarn`
- run `yarn start` (or npm start)

### Testing:

- Prettier: `npx prettier --check .`
- Prettier: `npx prettier --write .`
- Eslint: `npx eslint --fix .`
- Cypress: `yarn run cypress open`
- Code-Coverage report: `yarn run nyc report`
- Code-Coverage summary: `yarn nyc report --reporter=text-summary`

### Add new package:

- run `yarn add <package>`
- run `yarn` (updates yarn.lock)
- Push `yarn.lock`
