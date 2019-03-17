# RESTFUL-API NODEJS

Using nodejs and mongodb to build RESTFUL API

## APIs CREATION

### USERS (`/users`)

|ROOT|API|DES|
|---|---|---|
|`/users`|POST|CREATE a user|
|`/users`|GET|READ users|
|`/users/:id`|PUT|UPDATE a user|
|`/users/:id`|DELETE|DELETE a user|

## INSTALLATIONS
- clone this repo
- `npm install`
- update database in `/src/config/db.js`
```javascript
const server = '<your-server-name>';
const database = '<your-database-name>';
const user = '<your-username>';
const password = '<your-password>';
```
- run `npm start`
- open `INSOMNIA` or other REST app client
- enjoy coding!


