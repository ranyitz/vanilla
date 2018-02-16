# Vanilla - tiny test runner

This is a very simple implementation of a test runner, which helps to understand how it works under the hood. As you might guess, a lot of the features are missing and you can add most of them yourself.

__Here are some of the links we've seen at the talk:__
* [Install bin files in PATH using npm](https://docs.npmjs.com/files/package.json#bin)
* [Using npm link from a directory to work with the bin file globally](https://docs.npmjs.com/cli/link#description)
* [Shebang interpreter directive](https://en.wikipedia.org/wiki/Shebang_(Unix))
* [Env shell command](https://en.wikipedia.org/wiki/Env)
* [Chai assertion library](https://github.com/chaijs/chai)
* [Mocha test runner](https://github.com/mochajs/mocha)
* [Test Anything Protocol](https://testanything.org/)
* [Awesome list of Test Anything Protocol resources](https://github.com/sindresorhus/awesome-tap)
* [Node's EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)
* [Chalk - terminal string styling](https://github.com/chalk/chalk)
* [Symbols](https://www.copypastecharacter.com/symbols)
* [Emojis](http://getemoji.com/)

## Development
Run the following commands from the terminal

```bash
npm install
npm test
```

## Aditional features
Try to implement the following features under the current infrastructure.

1. `before`/`after`
2. `beforeEach`/`afterEach`
3. `it.only`
4. `it.skip`

__Guidance__

1. Write the usage of the feature on the example project.
2. Run `npm test` and let it fail.
3. Add the relevant global to the `rewireGlobals` function.
4. Add the new state under the constructor.
5. Change the `run` function accordingly.

__Good Luck!__ :smiley:

## FAQ
* How can i install the global `vanilla` command? - Use `npm link` from the main directory.
* How can i remove the global `vanilla` command? - You can use `npm unlink` from the vanilla directory.
