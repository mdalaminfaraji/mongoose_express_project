# mongoose_express_project

npm i init -y
npm install --save-dev typescript
npm i express
npm install mongoose --save
npm i cors
npm i dotenv

npx tsc --init.

mongodb+srv://<username>:<password>@cluster0.wu2rnap.mongodb.net/?retryWrites=true&w=majority

<!-- ts  -->

### tsconfig file

"include": ["src"], // which files to compile
"exclude": ["node_modules"], // which files to skip

### package .json file

    "start:prod": "node ./dist/server.js",
    "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
     "lint": "eslint --ext .js,.ts",

     "format": "prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\""

npm run lint --fix

### eslingt install

npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

npx eslint --init
-y
-y
-mdouler

- yes
- browser
- json
  -y
  -npm

### .eslint.json

```ts
  "rules": {
    "no-unused-vars": "error",
    "no-unused-expressions": "error",
    "prefer-const": "error",
    "no-console": "warn",
    "no-undef": "error"
  },
  "globals": {
    "process": "readonly"
  }





```

### .eslintignore

node_modules
dist

### prettier

npm install --save-dev prettier

### .prettierrc.json

{
"semi": true,
"singleQuote": true
}

### command

npx prettier --write src/app.ts

## npm install --save-dev eslint-config-prettier

-I

### .eslintrc

- add :
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],

### server running

npm i ts-node-dev

ts-node-dev --respawn --transpile-only server.ts

### ./src/app.ts

```ts
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// parsers

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 9;
  res.send(a);
});

export default app;
```

### ./src/server.ts

```ts
import config from './app/config';
import mongoose from 'mongoose';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
```

### .env

```ts

NODE_ENV = development


PORT=5000
DATABASE_URL = mongodb+srv://admin-um:dkEdT3z6laV3CxDL@cluster0.wu2rnap.mongodb.net/first-project?retryWrites=true&w=majority
```

### ./src/config/index.ts

```ts
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
```

### .eslintrc.json

```ts
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "no-unused-vars": "error",
    "no-unused-expressions": "error",
    "prefer-const": "error",
    "no-console": "warn",
    "no-undef": "error"
  },
  "globals": {
    "process": "readonly"
  }
}


```

### package.json

```ts

  "scripts": {
    "start:prod": "node ./dist/server.js",
    "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "lint": "eslint --ignore-path .eslintignore --ext .ts",
    "lint:fix": "npx eslint src --fix",
    "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
    "prettier:fix": "npx prettier --write src",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

```

# Software design Pattern

- MVC: modules views controllers interfaces routes

### Mvc pattern

1. interfaces:

- Student.interface.ts
- admin.interface.ts

2. routes

- student.route.ts

3. models
   -student.modelts

4. views

- Template Engine:
  -- ejs
  -- handerbars
  -- pugs
- Library/Framework
  -- React
  -- Vue
  -- Angular

5. controllers

- student.controller.ts

### Modular pattern

1. student

- student.interface.ts
- student.routes.ts
- student.controller.ts
- student.service.ts

2. Admin

- admin.interface.ts
- admin.routes.ts
- admin.controller.ts
- admin.service.ts

### Benefits of using Modular Pattern

1. Scaliblity
2. Maintainibilty
3. Better Refactoring
4. Efficient development

### Rules/ Principle

- DRY - Don't Repeat Yourself
- Fat Model/ Thin Controller

## Follow this pattern

Interface -> Schema -> Model -> DB Query

# Modular pattern

sequenceDiagram
participant client
participant route.ts
participant controller.ts
participant service.ts
client ->>route.ts:req
route.ts ->>controller.ts:req
controller.ts ->>client:res (success, message, data)
controller.ts ->>service.ts:req
service.ts ->>controller.ts:res
service.ts ->>database:req
database ->>service.ts:res
