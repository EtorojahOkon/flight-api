# flight-api
Solution to Zuri Flight API task in Node js

API response format
- Error
```json
  {
    "status" : "error",
    "data" : {
      "message" : "Error message"
    }
  }
```

- Success
```json
  {
    "status" : "success",
    "data" : {
      "message" : "Success message",
      ....
    }
  }
```

API endpoints
- Add Flight
**/addflight** (POST)

-Get all Flights
**/flights** (GET)

-Get Single flight
**/flights/:id/** (GET) where id is the flight id(number) 

- Update Flight
**/updateflight/** (PUT)

- Delete Flight
**/deleteflight** (DELETE)
