# List Price Info
This method allows listing price information for a specific socket. 

## <span style="color:#10b981">POST</span> `/priceInfos`
This method is used to fetch price information on a socket basis.

### Parameters
| key          | type         |
|--------------|--------------|
| token        | string       |
| socketNumber | string       |

### Sample Request
```
"Authorization": "Bearer YOUR_AUTHENTICATION_TOKEN"
```
```json
{
    "socketNumber": "SKT/549",
}
```
### Sample Response
```json
{
    "type": "priceInfoResultMultipleJSONObject",
    "status": "SUCCESS",
    "message": "Records found!",
    "chargeAutomationDtoList": [
        {
            "id": 107,
            "comment": "2022-09-28 ve sonrası geçerli olacak fiyat",
            "socketNumber": "SKT/152",
            "price": 50.99,
            "time": "2022-09-28T00:00:00+03:00"
        },
        {
            "id": 105,
            "comment": "İndirim güncellemesi",
            "socketNumber": "SKT/152",
            "price": 39.99,
            "time": "2022-08-28T00:00:00+03:00"
        },
        {
            "id": 104,
            "comment": "2022-08-18 ve sonrası geçerli olacak fiyat",
            "socketNumber": "SKT/152",
            "price": 49.99,
            "time": "2022-08-18T00:00:00+03:00"
        }
    ]
}
```

::: tip Note
The last 100 records are listed here by default.
:::