## Vendor API

### Authentication
`https://api.ptpema.co.id/api/auth2`

#### Resend Email Verification
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