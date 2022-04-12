# Workshop Concurrency in JavaScript

Material and Resources for the "Concurrency in JavaScript" Workshop. 

## Directory Structure
```
workshop-js-async/      <-- Project Root
├── examples/          <-- Demonstration Pages
├── exercises/         <-- Exercises for the Workshop
│   ├── 1-callbacks/   <-- Part 1 (Callbacks)
│   ├── 2-promise/     <-- Part 2 (Promises)
│   └── 3-async/       <-- Part 3 (Async / Await)
├── misc/              <-- Other documents and Material
├── slides/            <-- Slides
```

## Setup

In order to participate in the exercises the follwing steps must be done.

There are two ways to participate, either using a [Visual Studio Code Dev Container](https://code.visualstudio.com/docs/remote/containers) or using a standalone [Node.JS Installation](https://nodejs.org/en/).

No matter which way you prefer, you will need to clone the Repository using:

```sh
git clone git@github.com:twobiers/webtech-workshop-js-async.git
```

### Dev Container

**Prerequisites**
- [Docker](https://www.docker.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Remote Development VSCode Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
- [Remote Containers VSCode Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)


Open the VSCode and start the Devcontainer by launching the Command Palette (`Ctrl+Shift+P`), selecting `Remote Containers: Open Folder in Container...` and navigating to the cloned repository.
Open the VSCode terminal and run `npm install` in the project directory.

### Standalone Installation

**Prerequisites**
- [Node.JS](https://nodejs.org/en/)

**Recommendations**
- [Visual Studio Code](https://code.visualstudio.com/)
- [Code Runner VSCode Extension](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)


Run `npm install` in the project directory and you're ready to go.

## Executing an exercise file

When you have a solution for an exercise written in the file and want to test it, you can execute the file. If you are using VSCode with the [Code Runner Extension](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) this can be simply achieved by presing `Ctrl+Alt+N`. 

Otherwise you can use the node executable with the exercise file path as an argument, for example:
```js
node './exercises/1-callbacks/1a-guess_the_order.js'
```