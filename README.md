# esm-ts
![Version](https://img.shields.io/badge/version-0.0.9-blue.svg?cacheSeconds=2592000)


> Import ESM modules into your typescript without messing your configuration.

If you are importing an ESM module within a typescript project and receiving the following error then this package might save you some headaches. Don't forget to star ;)
```
Error [ERR_REQUIRE_ESM]: require() of ES Module
```
## Install

```sh
npm install esm-ts
```

## Usage
Install the ESM module you want to use. Then import it using the following function
```ts
import { requiresm } from 'ts-esm'
// specify the module you want to import
const ora = await requiresm('ora');
ora.start();
```

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/nooqta/esm-ts/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Anis Marrouchi](https://github.com/anis-marrouchi).

This project is [MIT](https://github.com/nooqta/linkedin-quizzes/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-kodyfire](https://github.com/nooqta/readme-kodyfire)_
