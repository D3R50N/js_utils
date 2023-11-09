
/**
 * A function that takes multiple async functions as arguments and returns a Promise that resolves with an array of objects containing the name of the function and its output.
 * @param {...function} args - The async functions to be executed.
 * @returns {Promise<Array<Object>>} - A Promise that resolves with an array of objects containing the name of the function and its output.
 */
function multiAwait(...args) {
  let results = [];
  return new Promise((res, rej) => {
    for (let f of args) {
      f().then((v) => {
        let v_object = { name: f.name, output: v };
        console.log(v_object);
        results.push(v_object);
        if (results.length == args.length) res(results);
      });
    }
  });
}

/**
 * A function that returns a Promise that resolves after a specified number of seconds.
 * @param {number} sec - The number of seconds to wait before resolving the Promise. Default is 1 second.
 * @returns {Promise<void>} - A Promise that resolves after the specified number of seconds.
 */
async function wait(sec = 1) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, sec * 1000);
  });
}


module.exports= {multiAwait, wait};