#!/bin/bash
yarn; yarn run prettier --write .; yarn run eslint --fix .; yarn run cypress run; yarn nyc report --reporter=text-summary;