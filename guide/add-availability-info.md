# Add Availability Info
With this method, you can change the availability of a particular socket.

## <span style="color:#10b981">POST</span> `/availabilityInfo`
This method returns the list of all sockets belonging to a station as an answer as a result of the Station number information entered in the stationNumber(ŞRJ/(integer) format) parameter.

### Parameters
| key          | type         |
|--------------|--------------|
| token        | string       |
| socketNumber | string       |
| status       | SocketStatus |
| startTime    | Time         |
| endTime      | Time         |

::: info **The values and explanations that the "status" parameter can take are as follows:**
- **NON_BUSINESS_HOURS:** Specifies the time that is out of the working time of this socket in the time interval sent for a socket. Working hours of Charging Stations can be sent by this method.
- **MAINTENANCE:** This value should be selected when a socket cannot be serviced due to maintenance.
- **FAULT:** This value should be selected when a socket will be out of service due to a fault.
- **RESERVED:** Indicates the time that this socket is reserved in the time interval sent for a socket. \
If the usage status of other socket(s) is affected due to the reservation status of a socket, availability data should be sent for the affected socket(s) indicating that they are also reserved.
:::

### Sample Request
```
"Authorization": "Bearer YOUR_AUTHENTICATION_TOKEN"
```
```json
{
  "socketNumber": "SKT/549",
  "status": "RESERVED",
  "comment": "Availability - Appointment",
  "startTime": "2023-08-26T18:00:00",
  "endTİme": "2023-08-26T19:00:00"
}
```
### Sample Response
```json
{
    "type": "chargeAutomationResult",
    "status": "SUCCESS",
    "message": "AvailabilityInfo added successfully!",
    "id": 245
}
```

Here, the unique number of the row of the transaction, **id** should be seen. This id number will be used as id parameter in [`findAvailabilityInfo`](/guide/find-availability-info), [`updateAvailabilityInfo`](/guide/update-availability-info) and [`deleteAvailabilityInfo`](/guide/delete-availability-info) methods.