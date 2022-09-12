# UsersCrudApplication
React &amp; Fast Api Crud application

## Pre-requisite:
- node v14 +
- Docker

# How to Run

## React setup
---
This application is created with **<a href='https://vitejs.dev/' >Vite</a>** and tested with **<a href='https://vitest.dev/'>Vitest</a>**.

1. Open terminal in the project directory
2. Type `cd PhoneBook`
3. Type `yarn install` and wait for it to complete
4. Now you can run test `yarn test` or test coverage `yarn coverage`
5. Type `yarn dev` to open the server
---

## Fast Api
---
The server-side application is deployed in docker with `postgres 13-alpine` DB and `python 3.10`.

1. Open terminal in the project directory
2. Type `cd BackendApi`.
3. Type `docker-compose build` and wait for some time to create the container image.
4. Type `docker-compose up` and wait for it.
5. Now you can check Api docs in `127.0.0.1:8001/docs`
6. Similarly you can see database with **`PgAdmin`** in port `127.0.0.1:5050`. Logins are based on the `.env` file: `Email: admin@admin.com` and `password: admin`.
   
- When command run `docker-compose up`, test is first executed and then the Uvicorn server is started. `pytest && uvicorn main:app --host 0.0.0.0 --port 8001 --reload`