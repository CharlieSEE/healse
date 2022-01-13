# Healse

Healse is a web app that lets you track your training progress.

## Features

With Healse you can easly track your:
-  Weight
-  BMI
-  Muscle and other body metrics
-  Body fat

## Building app

Clone the project:
```sh
git clone https://github.com/CharlieSEE/health-app
cd ./health-app
```

Install npm packages and build the app:
```sh
npm install
npm run build
```

### Static Server

Install [serve](https://github.com/vercel/serve) and run the build:

```sh
npm install -g serve
serve -s build
```

> Your static site will be _served_ on the port **3000**. You can adjust the port by using the `-l` or `--listen` flags:
> ```sh
> serve -s build -l 4000
> ```
