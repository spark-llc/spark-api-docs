# My Stations
You can use this method to get the information of all your stations in a particular city.

## <span style="color:#10b981">GET</span> `/myStations`
This method returns the list of stations of the charging network operator in the province specified with the provinceCode given in the parameter.

### Parameters
| key          | type    |
|--------------|---------|
| Token        | string  |
| provinceCode | integer |


### Sample Request
```
"Authorization": "Bearer YOUR_AUTHENTICATION_TOKEN"
```
```json
{
  "provinceCode": 34,
}
```
### Sample Response
```json
{
    "type": "stationInfoResultMultipleJSONObject",
    "status": "SUCCESS",
    "message": "Records found!",
    "stationInfoDTOList": [
        {
            "stationNumber": "ŞRJ/65",
            "stationName": "Zorlu Center - 1",
            "latitude": 41.066826,
            "longitude": 29.018465,
            "address": " BEŞİKTAŞ / İSTANBUL"
        },
        {
            "stationNumber": "ŞRJ/67",
            "stationName": "Metropol İstanbul DC",
            "latitude": 40.994228,
            "longitude": 29.121403,
            "address": " ATAŞEHİR / İSTANBUL"
        }
    ]
}
```