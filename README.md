# Guest book backend

## Relatives

website URL [HERE](https://esmail99.github.io/GuestBook-Frontend/).

Guestbook Frontend repository [HERE](https://github.com/Esmail99/GuestBook-backend).


## Dependencies

This app uses some dependencies:

1. [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs) - to hash users password.

1. [body-parser](https://www.npmjs.com/package/body-parser) - to parse incoming request bodies in a middleware before handling.

1. [cors](https://www.npmjs.com/package/cors) - to enable ors with various options.

1. [dotenv](https://www.npmjs.com/package/dotenv) - to load environment variables from a .env file into process.env.

1. [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - to Secure Node.js RESTful APIs.


## Code Structure

```
.
├── package.json
├── package-lock.json
├── README.md
├── config.js
├── .env
├── index.js
├── models
│   ├── Message.model.js
|   └── User.model.js
├── helpers
│   └── verifyToken.js
├── controllers
│   ├── message.controller.js
│   ├── user.controller.js
│   ├── messagesController
│   │   ├── addComment.js
│   │   ├── addMessage.js
│   │   ├── deleteMessage.js
│   │   ├── editMessage.js
│   │   └── getAllMessages.js
│   ├── usersController
│   │   ├── login.js
│   │   └── register.js
│   └── serviceWorker.js
└── .gitignore
```
