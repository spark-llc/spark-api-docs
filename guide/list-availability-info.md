# List Availability Info
With this method, you can view the availability of a specific socket for a specific date range.

## <span style="color:#10b981">POST</span> `/availabilityInfos`
This method is used to fetch availability information for a certain date range on a socket basis. `socketNumber`, `startTime` and `endTime` must be entered as parameters in the method. A maximum of 31 days can be entered between startTime and endTime.

### Parameters
| key          | type   |
|--------------|--------|
| token        | string |
| socketNumber | string |
| startTime    | Time   |
| endTime      | Time   |


### Sample Request
```
"Authorization": "Bearer YOUR_AUTHENTICATION_TOKEN"
```
```json
{
  "socketNumber": "SKT/549",
  "startTime": "2023-08-26T18:00:00",
  "endTİme": "2023-08-26T19:00:00"
}
```
### Sample Response
```json
{
    "type": "availabilityInfoResultMultipleJSONObject",
    "status": "SUCCESS",
    "message": "Records found!",
    "chargeAutomationDtoList": [
        {
            "id": 238,
            "comment": "Müsaitlik Durumu-Randevulu",
            "socketNumber": "SKT/152",
            "status": "RESERVED",
            "startTime": "2022-08-17T15:00:00+03:00",
            "endTime": "2022-08-17T16:00:00+03:00"
        },
        {
            "id": 242,
            "comment": "Rezervasyon saat güncellemesi",
            "socketNumber": "SKT/152",
            "status": "RESERVED",
            "startTime": "2022-08-17T17:00:00+03:00",
            "endTime": "2022-08-17T18:00:00+03:00"
        },
        {
            "id": 243,
            "comment": "Müsaitlik Durumu-Randevulu",
            "socketNumber": "SKT/152",
            "status": "RESERVED",
            "startTime": "2022-08-25T16:00:00+03:00",
            "endTime": "2022-08-25T17:00:00+03:00"
        },
        {
            "id": 246,
            "comment": "Soket kullanımı sona erdi.",
            "socketNumber": "SKT/152",
            "status": "IN_USE",
            "startTime": "2022-08-25T17:33:00+03:00",
            "endTime": "2022-08-25T17:44:00+03:00"
        }
    ]
}

```