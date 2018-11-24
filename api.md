# auth/register
## POST
```json
{
    email: '',
    password: ''
}
```
Returns:
- 200 OK
- Anything else > NOTOK

# auth/login
## POST
```json
{
    'email': '',
    'password: ''
}
```
returns:

- 200 
  ```json
  {
      'accountId': ''
  }
  ```
- AnythingElse > NOTOK

# /{accId}/tag
## POST
```json
{
    'number': '',
    'name': ''
}
```
returns:
- 200 OK
- 401 _Check unique number for tag_

## GET
returns:

```json
{
    tags: [
        {id, number, name}
    ]
}
```


# /{accId}/tag/{id}
## DELETE
returns:
- 200 OK
- 4xx ERROR

# /{accId}/payment
## GET
returns:
```json
{
    payments: [{id, amount, merchantId, productId, timestamp}, ...]
}
```

## POST
```json
{
    'amount': 0,
    'merchantId': 0,
    'productId': 0
}
```
returns:
- 200
- 401 Unauthorized > Not enough balance


