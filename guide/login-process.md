# Login Process
**All methods except the login method in the application work with the [`Token`](/guide/authentication-token.md) parameter.**
- In case of calling methods with an invalid token, the methods return the following JSON object:
```json
{
    "status": "FAIL",
    "message": "Error during processing Token and Login : Invalid Token"
}
```
- If the application receives an error, the methods return error messages such as the following:
```json
{
    "status": "FAIL",
    "message": "OnlineChargeAutomationBR0003 : NOT authorized for : SKT/4 !\n"
}
```