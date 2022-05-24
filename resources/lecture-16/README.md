# Lecture 16 - [Backend 3] Understand Express Middleware

- Middleware
- Project Structure
- Project

#### Middleware:

- What is Middleware?

  - Middleware is just a controller function. It comes from DRY (Don't repeat yourself) principle. It actually used to reuse the controller.
    Req -> M1 -> M2 -> M3 -> Res

    ```js
    // We will never call it, express will automatically invoke for us.
    // This is middleware
    function xyz(req, res, next) {
    	next();
    }

    // This is controller
    function xyz(req, res, next) {
    	res.send();
    }
    ```

    The basic difference between a middleware and controller is, middleware calls `next()` function and a controller calls function related to `response`.

    ```js
    // Demo Code
    const express = require('express');

    const app = express();

    app.use(express.static(__dirname + '/public'));

    const simpleLogger = (req, res, next) => {
    	console.log(`${req.url} - ${req.method} - ${new Date().toISOString()}`);
    	next();
    };

    const secondMiddleWare = (res, req, next) => {
    	console.log('I am second middleware');
    	next();
    };

    app.use([simpleLogger, secondMiddleWare]);

    app.get('/hello', (req, res, next) => {
    	res.json({ message: 'Hello' });
    });

    app.get('/', (req, res, next) => {
    	res.json({ message: 'Sweet Home' });
    });

    app.listen(8000, () => {
    	console.log('Application running on port 8000');
    });
    ```

#### References

- [Source Code](../../src/lecture-16/)
- [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

#### Task

- Watch the video and create the structure as shown in video. Write and article with explanation of the structure.
