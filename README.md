# Hardhat + React + MobX

This project is intended to be some boilerplate to help me learn hardhat.

## Setup

In the root folder, run these commands:

```bash
npm install
npm test

cd front-end
npm install
npm test
```

If you have green tests, you're in good shape.

## Running a local chain

In the root folder, run

```bash
npm run develop
```

This will start a hardhat node on your localhost and run the deployment script against it.

Ctrl-c to exit and run again for a fresh chain with the latest contracts.

## Running the Front End

In the front-end folder, run

```bash
npm start
```

This gives you a stock React dev server.

## Deploying to Ropsten

First, you'll need to set up your .env file.

```bash
cp .env.EXAMPLE .env
```

And then enter your deets in there.

Next up run `npm run deploy:ropsten` and you're all set.
