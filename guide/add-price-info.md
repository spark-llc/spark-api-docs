# Add Availability Info
This method allows adding price information for a specific socket

## <span style="color:#10b981">POST</span> `/availabilityInfo`
This method allows to add price information that will be applied from the specified date of the given socket id.

### Parameters
| key          | type         |
|--------------|--------------|
| token        | string       |
| socketNumber | string       |
| price        | string       |
| date         | Time         |

::: warning
The next day's price information can be sent until 17:00 at the latest. The price information to be sent after 17:00 will not be valid for the next day.
:::

### Sample Request
```
"Authorization": "Bearer YOUR_AUTHENTICATION_TOKEN"
```
```json
{
    "socketNumber": "SKT/549",
    "price": "59.45",
    "date": "2023-08-26T18:00:00",
    "comment": "2023-08-26 ve sonrası geçerli olacak fiyat."
}
```
### Sample Response
```json
{
    "type": "chargeAutomationResult",
    "status": "SUCCESS",
    "message": "PriceInfo added successfully!",
    "id": 107
}
```

Here, the unique number of the row of the transaction, **id** should be seen. This id number will be used as id parameter in findPriceInfo, updatePriceInfo and deletePriceInfo methods.