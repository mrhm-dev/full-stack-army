# Backend 3 | Understand Express Middleware

- Middleware
- Project Structure
- Project

## Middleware

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

- The basic difference between a middleware and controller is, middleware calls `next()` function and a controller calls function related to `response`

- [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [.gitignore](https://www.toptal.com/developers/gitignore)

## Task

- Watch the video and create the structure as shown in video. Write and article with explanation of the structure.
