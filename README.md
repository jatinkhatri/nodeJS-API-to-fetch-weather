
# Node JS Assignment 2

- Create a NodeJS API to fetch weather details for a given City using Weather API
- API  will accept city name and read from DB table 
- NodeJS will fetch encrypted Key Secrets from configuration file for authenticating Google Weather API
- NodeJS API will call weather API to get latest weather information and dump this info in DB Table 
- Return weather details in 20 seconds of last call for the same City, API will respond with DB Table dump, post 20 seconds it will go to Google API to get latest weather
- Write Unit Test cases on API.
- Log the API execution in Log files with Date stamp.

## Requirments

- Node
- mysql
## Installation

Install Assigment-1 with npm

- Create new mysqldb
- Import weatherApp.sql
- Update .env file in the project
- run below commands

```bash
  cd path-project
  npm install
  npm start
```
## Testing

Test Assigment-1 with npm

```bash
  npm test
``` 

## API Reference

#### Get weather

```http
  GET /weather?city=toronto
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `city` | `string` | **Required**. city name


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`OPENWEATHER_API`

`DB_HOST`

`DB_USER`

`DB_PASSWORD`

`DB_NAME`

