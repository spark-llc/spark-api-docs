# Authentication Token
A token is obtained when a successful login is made with the authenticationToken method. The token will be used in methods with an input parameter as long as the session does not expire (timeout period is **60** minutes).

## <span style="color:#10b981">Post</span> `/authenticationToken`
The token data used to run the methods in the system can be obtained with the [`authenticationToken`](/guide/authentication-token.md) method. As can be seen, the response of this method is in the form of a single text.

### Parameters
| key      | type   |
|----------|--------|
| username | string |
| password | string |


### Sample Request
```json
{
  "username": "WSU-ŞH/123456/00005",
  "password": "your_password_here"
}
```
### Sample Response
```txt
eyJhbGciOiJIUzI1NiIsInYAG14R5cCI6IkpXVC9SPARKJ1c2VybmFtZSI6IldT...
```
---

### Possible Errors
- If the password is incorrect, the following error message is returned.
```json
{
    "status": "FAIL",
    "message": "Şifre Hatalı!"
}
```
- If the username is incorrect, the following error message is returned.
```json
{
    "status": "FAIL",
    "message": "Unknown user - 'WSU-SH/4568/0000'"
}
```