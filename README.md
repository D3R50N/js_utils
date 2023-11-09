# JS Utils by D3R50N

## Description

Hey. This is a repository of small, useful JavaScript programs. This project aims to provide practical and modular solutions for various tasks.

## Installation

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/D3R50N/js_utils.git
```

## How to Use

### 1. [multi_await.js](https://github.com/D3R50N/js_utils/blob/master/src/multi_await.js)

#### Description

`multiAwait` is a function that takes multiple async functions as arguments and returns a Promise that resolves with an array of objects containing the name of the function and its output.

#### Usage Example

```javascript
const result = await muti_await(
  asyncFunction1,
  asyncFunction2,
  asyncFunction3
);
console.log(result[0].name, result[0].output); // name and outpout of the first function that ended (could be any of the three)

```

### Contributions

Contributions are welcome! If you have ideas for new useful programs, feel free to open an issue or submit a pull request.
