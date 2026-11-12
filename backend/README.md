# Backend

Suggested stack: Node.js + Express. Keep the MVC flow:

`route -> controller -> service -> model`

Controllers should validate/parse HTTP input and format responses. Put business logic in `src/services`. Models own persistence and data access. Do not put business rules in route files or frontend code.

Suggested setup: `npm init -y`, then install `express` and a development runner such as `nodemon`.
