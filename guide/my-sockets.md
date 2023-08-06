# My Sockets
You can use this method to get the information of all sockets of a particular station.

## <span style="color:#10b981">GET</span> `/mySockets`
This method returns the list of all sockets belonging to a station as an answer as a result of the Station number information entered in the stationNumber(ŞRJ/(integer) format) parameter.

### Parameters
| key           | type   |
|---------------|--------|
| token         | string |
| stationNumber | string |

### Sample Request
```
"Authorization": "Bearer YOUR_AUTHENTICATION_TOKEN"
```
```json
{
  "stationNumber": "ŞRJ/67",
}
```
### Sample Response
```json
{
    "type": "socketInfoResultMultipleJSONObject",
    "status": "SUCCESS",
    "message": "Records founds!",
    "socketInfoDTOList": [
        {
            "unitNumber": 1,
            "socketPower": 120.0,
            "currentType": "DC",
            "socketType": "DC_CHADEMO",
            "socketNumber": "SKT/149"
        },
        {
            "unitNumber": 2,
            "socketPower": 120.0,
            "currentType": "DC",
            "socketType": "DC_CCS",
            "socketNumber": "SKT/150"
        },
        {
            "unitNumber": 3,
            "socketPower": 22.0,
            "currentType": "AC",
            "socketType": "AC_TYPE2",
            "socketNumber": "SKT/151"
        },
        {
            "unitNumber": 4,
            "socketPower": 43.0,
            "currentType": "AC",
            "socketType": "AC_TYPE2",
            "socketNumber": "SKT/152"
        }
    ]
}

```