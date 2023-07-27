# Next.js gif gallery app

A simple gif gallery app built using the Next.js framework and the giphy api.

The reason to use Next.js is for the seo benefits like server side rendering, automatic photo optimization, among others.

I chose the typescript programming language, since being typed allows better scalability.

The app has infinite scroll, a simple autocomplete search bar, tailwind css with simple darkmode (changes with system color), integration testing with jest and a code linter and formatter.

The project attempts to implement functional programming concepts such as immutability, more declarative code, and including pure functions.

&nbsp;

<p align='center'>
   <img
      src='https://drive.google.com/uc?id=1JxudsHnc2e_5NBWsRzhOCRALWRBEATHm'
      alt='demo video of the gif gallery app'
   />
</p>

&nbsp;

# Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) version 18.15.0 or later
- [Git](https://git-scm.com/downloads) (I used 2.34.1)

## Installation

1. Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install project dependencies

   ```bash
   npm install
   ```
2. Set husky

   ```bash
   npm run prepare
   ```

3. Set `.env` variables in `.env.local`

4. Get the api key in [Giphy developers](https://developers.giphy.com/) and assign it to the env variable `NEXT_PUBLIC_GIPHY_API_KEY`

# Usage

## Run app in production mode

```bash
npm run build
npm run start
```

## Run app in dev mode

```bash
npm run dev
```

# Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to
change.

Please make sure to update tests as appropriate.

# License

[MIT](https://choosealicense.com/licenses/mit/)
