# Start In Use
With this method, you can send information that a specific socket is being used.

## <span style="color:#10b981">POST</span> `/startInUse`
This method should be used to indicate that a socket is in use from the system date-time, which can be obtained by the [`getSystemDate`](/guide/system-date.md) method. This submission should be made immediately upon the start of use of the socket.

### Parameters
| key          | type       |
|--------------|------------|
| token        | string     |
| socketNumber | string     |
| comment      | string     |


### Sample Request
```
"Authorization": "Bearer YOUR_AUTHENTICATION_TOKEN"
```
```json
{
  "socketNumber": "SKT/549",
  "comment": "Socket is started to be used."
}
```
### Sample Response
```json
{
    "type": "chargeAutomationResult",
    "status": "SUCCESS",
    "message": "AvailabilityInfo(In Use) added successfully!",
    "id": 244
}
```

Here, the unique number of the row of the transaction, **id** should be seen. This id number will be used as the id parameter in the endInUse, findAvailabilityInfo and deleteAvailabilityInfo methods.