# Delete Price Info
This method is used to **delete** price information on a record basis (for an id number).

## <span style="color:#f72f2f">Delete</span> `/priceInfo/{ID}`
The method is to add the id no to the end of the url. It works by adding an id to the method as a parameter.

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
    "type": "chargeAutomationResult",
    "status": "SUCCESS",
    "message": "PriceInfo deleted successfully!",
    "id": 107
}
```