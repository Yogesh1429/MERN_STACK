
// Async JS Retry function with Promises retry(fn, retries, delay)
// I done using chatGPT,but i understand how promise, asnc and wait works respectively.
function retry(fn, retries, delay) {
  return new Promise((resolve, reject) => {

    function attempt(n) {
      fn()
        .then(resolve) // success → done
        .catch(err => {
          if (n === 0) {
            reject(err); // no retries left
          } else {
            console.log("Retrying...", n);
            setTimeout(() => attempt(n - 1), delay);
          }
        });
    }

    attempt(retries);
  });
}