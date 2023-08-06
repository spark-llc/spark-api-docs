# Find Availability Info
This method is used to find availability information on a record basis (for an id number).

## <span style="color:#10b981">GET</span> `/availabilityInfo/{ID}`
The method is to add the id no to the end of the url. It works by adding an id to the method as a parameter.

::: info
Just the id number as a parameter. Parameter entry for the entered find and delete methods is not done from the Body part as in other methods. The body part is left blank with the none option and the id no. The entry must be made by appending the request to the end of the address.
:::

### Parameters
| key          | type   |
|--------------|--------|
| token        | string |

### Sample Request
```
"Authorization": "Bearer YOUR_AUTHENTICATION_TOKEN"
```
```
Add /{ID} to the end of the address.
```
### Sample Response
```json
{
    "type": "availabilityInfoResultSingleJSONObject",
    "status": "SUCCESS",
    "message": "Record found!",
    "chargeAutomationDto": {
        "id": 247,
        "comment": "Müsaitlik Durumu-Randevulu",
        "socketNumber": "SKT/152",
        "status": "RESERVED",
        "startTime": "2022-08-25T18:00:00+03:00",
        "endTime": "2022-08-25T19:00:00+03:00"
    }
}
```