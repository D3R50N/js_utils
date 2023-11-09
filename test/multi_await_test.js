const { multiAwait, wait } = require('../src/multi_await');



// async function that will be waited
async function f1() {
  await wait();
  console.log("f1"); // shown after 1 sec
  await wait(3);
  // f1 ends after 1 + 3 = 4 secs
}

// more examples ..
async function f2() {
  await wait(2);
  console.log("f2");
  await wait(1);
}

async function f3() {
  await wait();
  console.log("f3");
  await wait();
}

/** 
 ** In this function we'll wait for the 3 functions that will run simultaneously
 ** Usually, we have to wait for f1 + f2 + f3 time (1+3+2+2+1+1 = 10 secs)
 ** But in this, they are beginning at the same time so we just have to wait 4 secs (f1 has the greatest waiting time)
 */
async function test() {
  console.log("START");
  var results = await multiAwait(f1, f2, f3);
  console.log("END"); // shown after 4 secs
  console.log(results[0].name); // first function that ends (f3)
}

test();
