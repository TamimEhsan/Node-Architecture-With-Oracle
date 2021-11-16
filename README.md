# Node-Architecture

This is aimed to create a basic architecture for data flow in nodejs.

The structure is separated in several layers.

Some major functionality that is implemented now is

- Router
- Passport Authentication
- Validation middlewares (Not included in this one)
- Controller
- Service (Didn;t use in this project)
- Repository 
- Oracle Database Connection


## Data Flow

### Router

- At first http request is accepeted from app.js and routed to route/api.js
- There it is passed to whatever path it is

### Authentication
Router here checks if the user is authorized or not. It filters all the api calls in api route

### Validation
Validation middleware validates and sanitized the user input to minimize security risks. Not included in this project

### Controller

- The main/business logic is implemented is controller layer
- It asks for data from service layer (But for this straight from repository)

### Service
Not included
- Service layer implements all logic related to sql queries
- But it doesn't fetch the data itself

### Repository
- Repository is where the query is executed and served
- Redis or Node Caching is done here (Not included)


### Dependencies

The project runs on NodeJS environment. So at first you should download node in your machine. Bear in mind node takes huge amount of to download

## Installing

Run the script

```
npm install
```

## Executing program

Run the script 
```
npm start
```
to start nodemonitor realtime updater for node environment.
To kill process type cltrl+c in terminal

## Help

Any advise for common problems or issues ask directly

## Authors

Contributors names and contact info

Tamim Ehsan

## Version History

* 0.2
    *  Sequelize, redis, service layer removed
    * Changed from POSTGRE to ORACLE
* 0.1
    * Initial Release 

## License

This project is licensed under the MIT License - see the LICENSE.md file for details