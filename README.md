# my-store

It is a dashboard application that list, adds, updates, and deletes products, connected with an API my-store-backend.
Also, it has an authentication using the Firebase service.

## Repository

### Frontend (my-store)

(https://github.com/mestri/my-store)

### Backend (my-store-backend)

(https://github.com/mestri/my-store-backend)

## Stack

### Frontend

- Typescript
- React context
- React router
- Axios
- Styled components
- Grommet
- Grommet icons
- Firebase

### Backend

- nodeJS
- Typescript
- Express
- MongoDB
- Docker

## Initial setup

1. ### install dependencies

All dependencies of both (Frontend and Backend) will be installed using the following command:

```
npm install
```

## Running the apps

1. ### Running my-store-backend

- First of all, it is necessary to have docker, and docker-compose installed
- The API connects to a MongoDB online service, but if you need to run MongoDB locally, you need to change the connection in the App.ts file
- Then, in the root of the applications folder runs docker-compose

```
docker-compose up
```

- Finally, runs the app using the following command:

```
npm start
```

2. ### Running my-store

It runs using the following command:

```
npm start
```

## Using the my-store-backend app

1. ### Url

Use the url http://localhost:5500/

## Using the my-store app

1. ### Login

Use the url http://localhost:3000/

It shows a login form that allows SignIn or Register using the Firebase authentication service.

2. ### Product List

After login into the app, it shows the product list with the options to edit or delete the items.

3. ### Add Products

Choose the Navbar's "Product Add" option to show to the Add product form.

## Postman collection

All the postman collection is in the project:

[Postman collection](./info/challenge.postman_collection.json)
