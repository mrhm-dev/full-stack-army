# Lecture - 114 | MongoDB Atlas, Mongoose and Models

## Resources

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [Mongoose Models](https://mongoosejs.com/docs/models.html)
- [Mongoose Schema](https://mongoosejs.com/docs/guide.html)
- [Faker.js](https://fakerjs.dev/)


## Backend File Structure

```js
- backend/
    ├── package.json
    ├── src/
	│	│   ├── app.js // express app root file
    │   └── index.js // boot file
    │   ├── api/
    │   │   └── v1/
    │   │       ├── authentication
    │   │       │   ├── controller.js
    │   │       │   └── index.js
    │   │       └── books/
    │   │           ├── controller.js
    │   │           ├── index.js
    │   │           └── validation.js
    │   │
    │   ├── lib/
    │   │   ├── book/
    │   │   │   ├── index.js
    │   │   │   └── service.js
    │   │   └── user/
    │   │       ├── index.js
    │   │       └── service.js
    │   │
    │   ├── middleware/
    │   │   └── index.js
    │   │
    │   ├── model/
    │   │   ├── Book.js
    │   │   └── User.js
    │   │
    │   ├── routes/
    │   │   ├── admin.js
    │   │   ├── client.js
    │   │   ├── index.js
    │   │   ├── mobile.js
    │   │   └── public.js
    │   │
    │   ├── utils/
    │   │   └── index.js
```