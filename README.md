# Next.js gif gallery app

A simple gif gallery app built using the Next.js framework and the giphy api.

The reason to use Next.js is for the seo benefits like server side rendering, automatic photo optimization, among others.

I chose the typescript programming language, since being typed allows better scalability.

The app has infinite scroll, a simple autocomplete search bar, tailwind css with simple darkmode (changes with system color), unit tests with jest and a code linter and formatter.

The project attempts to implement functional programming concepts such as immutability, more declarative code, and including pure functions.

&nbsp;

![demo video of the gif gallery app](https://drive.google.com/uc?id=1enW3RSGjbQogaEmCuL9NASbgDbSKS0LH 'Gif gallery app')

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

2. Set husky pre-commit hook

   ```bash
   npm run husky:pre-commit
   ```

3. Set `.env.local.example` variables in `.env.local`

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
