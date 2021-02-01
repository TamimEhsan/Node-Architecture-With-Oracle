# Node-Architecture

This is aimed to create a basic architecture for data flow in nodejs.

The structure is separated in several layers.

Some major functionality that is implemented now is

- Repository design pattern
- Passport jwt authentication
- Postgres data fetch with pooling
- Redis caching
- OOP structure

- ORM with sequelizer

## Data Flow

### Router

- At first http request is accepeted from app.js and routed to route/api.js
- There it is passed to whatever path it is

Router here checks if the user is authorized or not. It filters all the api calls in api route

### Controller

- The main/business logic is implemented is controller layer
- It asks for data from service layer

### Service

- Service layer implements all logic related to sql queries
- But it doesn't fetch the data itself

### Repository

- Repository is where the query is executed
- It has two head. One to  ~~redis~~ and other to postgresql
- The topic route is now sequelized with ORM

~~At first it checks where a key is present in redis. if yes send the data from redis. Usual time 400 ms. And if not then asks the data from database and caches in redis for 3600 ms. usual time for first time data fetching is about 800 ms.~~ 