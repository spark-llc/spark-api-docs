# System Date
Some other methods require the current time. With this method you can get the time.

## <span style="color:#10b981">Get</span> `/systemDate`
This method returns the system clock in response. The returned response should be used as a reference value when transmitting date-time data to the system. This value is the instant date-time data accepted as valid by the system.

### Sample Response
```json
{
    "value": "2023-08-14T10:41:59.653+03:00"
}
```