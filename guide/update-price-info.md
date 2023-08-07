# Update Price Info
This method is used to update availability information on a record basis (for an id number).

## <span style="color:#10b981">PUT</span> `/priceInfo`
This method is used to update price information on a record basis.
The id and the data of the other parameters to be updated should be entered as parameters in the method.

::: warning
A retrospective update cannot be made. The price data for the day after the current date, which is valid for the addition, can be sent until 17:00, also applies to the update.
:::

### Parameters
| key          | type    |
|--------------|---------|
| token        | string  |
| id           | string  |
| price        | string  |
| comment      | string  |

### Sample Request
```
"Authorization": "Bearer YOUR_AUTHENTICATION_TOKEN"
```
```json
{
  "id": "549",
  "price": "45.99",
  "comment": "Fiyat Bilgisi Güncellemesi",
}
```

### Sample Response
```json
{
    "type": "chargeAutomationResult",
    "status": "SUCCESS",
    "message": "PriceInfo updated successfully!",
    "id": 549
}
```