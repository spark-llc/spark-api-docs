# Update Availability Info
This method is used to update availability information on a record basis (for an id number).

## <span style="color:#10b981">PUT</span> `/availabilityInfo`
The method is to add the id no to the end of the url. It works by adding an id to the method as a parameter.

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
  "id": "549",
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
    "id": 248
}

```