#!/bin/bash

############# change these settings ###################
DB_PASSWORD=1234 # for development only
DB_HOST=localhost
#######################################################

export DB_PASSWORD
export DB_HOST
export MONGO_URL=mongodb://localhost

npm run launch
