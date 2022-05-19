<p align="center">
 <img width="160px" src="https://i.ibb.co/YtyPmgy/appedir-Logo.png"><br/>
  <h2 align="center">MERCADITO APP </h2>
</p>

### Appendix

- Description
- Previous requirements
- Clone Project
- Environment variables
- Android Set Up
- iOS Set Up
- Work Environments
- Generate Android .apk
- Generate iOS TestFlight
- FAQ

---

#### Description

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.

---

#### Previous requirements

- Install latest LTS Nodejs at [NodeJS.org](https://nodejs.org/es/).
- You must have already installed [React Native CLI](https://reactnative.dev/docs/environment-setup "React Native CLI") on Android / iOS and their dependencies.
- Ask for environment variables and key stores to your lead.

Check node and npm versions:

```bash
  node --version
```

> v16.15.0

```bash
  npm --version
```

> 8.5.5

---

#### Clone Project

```bash
  git clone git@bitbucket.org:tradesystem/mercadito_app.git
```

Go to the project directory

```bash
  cd mercadito_app
```

Install dependencies

```bash
  npm install
```

---

#### Environment variables

1. Paste the development variables at location:

> enviroments/dev

2. Paste the production variables at location:

> enviroments/prod

---

#### Android Set Up

Paste the keyStores at location:

> android/app

Run command the follow command to start the server:

```bash
  npm run android
```

---

#### iOS Set Up

Install Pods dependencies:

```bash
  npm run pods
```

Open project in XCode tu run iOS server.

#### Work Environments

To change the environment you must run:

1. For Development:

```bash
  ./switchenv.sh dev
```

2.  For Staging:

```bash
  ./switchenv.sh staging
```

3. For Production:

```bash
  ./switchenv.sh prod
```

---

### Generate Android .apk

Run the follow command:

```bash
  npm run release
```

The generated apk must be at location:

> android/app/build/outputs/apk/release

### Generate iOS TestFlight

---

## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2
