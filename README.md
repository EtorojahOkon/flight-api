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

**/flights/:id/** (GET) where id is the flight id(integer) 

- Update Flight

**/updateflight/** (PUT)

- Delete Flight 

**/deleteflight** (DELETE).

### Parameters
- Add flight

title(string, required), price(integer/string, required), date(date, required), time(date, required)

- Get single Flight

id(integer, required)

- Update flight

id(integer, required), title(string, optional), price(integer/string, optional), date(date, optional), time(date, optional)

- Delete flight

id(integer, required)
