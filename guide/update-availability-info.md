# Update Availability Info
This method is used to update availability information on a record basis (for an id number).

## <span style="color:#10b981">PUT</span> `/availabilityInfo`
This method is used to update the availability information on a registration basis. The id and the data of the other parameters to be updated should be entered as parameters in the method.

### Parameters
| key          | type    |
|--------------|---------|
| token        | string  |
| id           | string  |
| comment      | string  |
| startTime    | Time    |
| endTime      | Time    |

### Sample Request
```
"Authorization": "Bearer YOUR_AUTHENTICATION_TOKEN"
```
```json
{
  "id": "459",
  "comment": "Rezervasyon Saat Güncellemesi.",
  "startTime": "2023-08-26T18:00:00",
  "endTİme": "2023-08-26T19:00:00"
}
```

### Sample Response
```json
{
    "type": "chargeAutomationResult",
    "status": "SUCCESS",
    "message": "AvailabilityInfo updated successfully!",
    "id": 459
}
```