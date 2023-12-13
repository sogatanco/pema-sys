# Vendor API

## Authentication
`https://api.ptpema.co.id/api/auth2`

### Resend Email Verification
Request
```http
GET /resend/[id_user]
```
Parameter
- `id_user` : `[integer]` - userId  

Success Response
```
{
    "success": true,
    "message": "Email Verification sent succesfully",
    "data": []
}
```
Error Response
```
{
    "success": false,
    "message": "Failed to send",
    "data": []
}
```

### Register
Request
```http
POST /register
```
Parameter
- `email` : `[email]` 
- `password` : `[text]` 
- `bentuk_usaha` : `[text]` 
- `nama_perusahaan` : `[text]` 


Success Response
```
{
    "success": true,
    "message": "Register Success",
    "data": [user data]
}
```
Error Response
```
{
    "success": false,
    "message": "Failed To Register",
    "data": []
}
```

```
{
    "success": false,
    "message": "Email already registered",
    "data": []
}
```
