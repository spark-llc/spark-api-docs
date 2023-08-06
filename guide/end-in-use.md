# End In Use
With this method, you can end the use of a specific socket.

## <span style="color:#10b981">POST</span> `/endInUse`
This method should be used to indicate that a socket has expired from the system date-time, which can be obtained with the [`getSystemDate`](/guide/system-date.md) method. This submission should be made immediately after the socket is expired.

### Parameters
| key          | type       |
|--------------|------------|
| token        | string     |
| id           | string     |
| comment      | string     |


### Sample Request
```
"Authorization": "Bearer YOUR_AUTHENTICATION_TOKEN"
```
```json
{
  "id": "244",
  "comment": "Socket usage expired."
}
```
### Sample Response
```json
{
    "type": "chargeAutomationResult",
    "status": "SUCCESS",
    "message": "AvailabilityInfo(In Use) updated successfully!",
    "id": 244
}
```

Here, the unique number of the row of the transaction, **id** should be seen. This id number will be used as the id parameter in the endInUse, findAvailabilityInfo and deleteAvailabilityInfo methods.