# Liz-Art-monitoring
A repository to monitor lizzyshort.com

This repository uses an automated UI test to monitor a critical user path on staging. It uses Cypress and Github Actions to trigger a job each night at 4am. 


Critical Paths covered:

- Add product to cart and checkout securely



## Running locally
```
npx cypress test
```


## Open Cypress & run
```
npx cypress open
```