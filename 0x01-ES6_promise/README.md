# JavaScript Promises and Async/Await

## 1. Introduction to Promises
   - **What is a Promise?**
      *Definition and purpose*
     - A Promise is an object representing the eventual
       completion (or failure) of an asynchronous operation and its resulting value.
     - Promises provide a way to handle asynchronous
       operations in a more manageable and readable manner
       compared to traditional callbacks.

      *States of a Promise*
       - Pending: The initial state, neither fulfilled nor rejected.
       - Fulfilled: The operation completed successfully.
       - Rejected: The operation failed.
   - **Why use Promises?**
      *Handling asynchronous operations*
      - Promises allow you to write asynchronous code that
      is easier to read and maintain.
      - They handle operations like network requests, file
      reading/writing, and timers.
      *Avoiding callback hell*
      - Promises help avoid deeply nested callbacks, known
      as "callback hell," by allowing chaining of operations.
   - **How Promises work**
     - Basic structure and syntax
     - example.js

## 2. Creating and Using Promises
   - **Creating a Promise**
     - The `new Promise` constructor
     (i) A Promise is created using the new Promise constructor.
     (ii) The constructor takes an executor function as an argument.
     - Executor function: `resolve` and `reject`
     (i) The executor function has two parameters: resolve and reject.
     (ii) resolve is a function that, when called, transitions the Promise from the "pending" state to the "fulfilled" state.
     (iii) reject is a function that, when called, transitions the Promise from the "pending" state to the "rejected" state.
   - **Example: Creating a simple Promise**
     ```javascript
     const myPromise = new Promise((resolve, reject) => {
       const success = true;
       if (success) {
         resolve("Promise fulfilled!");
       } else {
         reject("Promise rejected!");
       }
     });

     myPromise
        .then((result) => {
            console.lolg(result);
        })
        .catch((error) => {
            console.error(error);
        });

## 3. Methods of a Promise
   - **.then() method**
     - Syntax and usage
     (i) .then(onFulfilled, onRejected)
     (ii) onFulfilled: Function to execute when the Promise is fulfilled.
     (iii) onRejected (optional): Function to execute when the Promise is rejected.
     - Chaining multiple `.then()` calls
     (i) .then() returns a new Promise, allowing for chaining.
     (ii) Each .then() can process and return values for the next .then().
     - Example
     example-2.js
   - **.catch() method**
     - Handling errors
     (i) .catch(onRejected)
     (ii) onRejected: Function to execute when the Promise is rejected
     - Syntax and usage
     (i) .catch() is used to handle errors from the Promise chain.
     (ii) Can be appended at the end of the chain to handle any rejections from any .then() in the chain.

     - Example
     example-3.js
   - **.finally() method**
     - Executing code after promise settlement (fulfilled or rejected)
     (i) .finally(onFinally);
     (ii) onFinally: Function to execute after the Promise is settled, regardless of its outcome.
     - Syntax and usage
     (i) .finally() is used to execute code after the Promise has settled, no matter if it was fulfilled or rejected.
     (ii) Typically used for cleanup or final steps that need to run in either case.
     - Example
     example-4.js

## 4. Static Methods of the Promise Object
   - **Promise.resolve()**
     - Creating a resolved promise
     (i) .Promise.resolve(value);
     (ii) Creates a Promise that is resolved with the given value
     - Example
     example-5.js
   - **Promise.reject()**
     - Creating a rejected promise
     (i) Promise.reject(reason);
     (ii) Creates a Promise that is rejected with the given reason
     - Example
     example-6.js
     
   - **Promise.all()**
     - Running multiple promises in parallel
     (i) Promise.all(iterable);
     (ii) Takes an iterable of Promises and returns a single Promise that resolves when all of the input Promises have resolved or rejects when any of them rejects.

     - Waiting for all to be fulfilled or any to be rejected
     (i) If all input Promises resolve, the resulting Promise resolves with an array of their values
     (ii) If any input Promise rejects, the resulting Promise rejects with the reason of the first rejected Promise.

     - Example
     example-7.js

   - **Promise.race()**
     - Resolving/rejecting as soon as one of the promises resolves/rejects
     (i) Promise.race(iterable);
     (ii) Takes an iterable of Promises and returns a single Promise that resolves or rejects as soon as one of the input Promises resolves or rejects.
     - Example
     example-8.js

   - **Promise.allSettled()**
     - Waiting for all promises to settle (either fulfilled or rejected)
     (i) Promise.allSettled(iterable);
     (ii) Takes an iterable of Promises and returns a single Promise that resolves when all of the input Promises have settled (either fulfilled or rejected).
     - Example
     example-9.js

## 5. Error Handling with Try/Catch
   - **Throwing errors**
     - Using `throw` to create an error
     The throw statement generates an error, stopping the execution of the current function and passing control to the nearest error handler.

     - Example
     example-10.js

   - **Try/Catch blocks**
     - Handling synchronous and asynchronous errors
     (i) A try block contains code that might throw an error.
     (ii) A catch block contains code that handles the error if one is thrown in the try block.
     (iii) Asynchronous errors can be handled with try/catch when using async/await.
     - Syntax and usage
     (i) try { ... } catch (error) { ... }
     (ii) The try block executes a block of code, and if an error occurs, the catch block handles it.
     - Example

## 6. Async/Await
   - **The await operator**
     - *Pausing async function execution*
      (i) the await operator is used to pause the execution of an `async` function until a promise is setlled(fulfilled or rejected).

     - *Waiting for a promise to settle* 
      (i) `await` waits for the Promise to either resolve(fulfill) or reject.
      (ii) The `await` expression returns the resolved value of the Promise or throws the rejected value as an error  

     - *Syntax and usage*
      (i) `let result = await promise;`
      (ii) Can only be used inside an `async` function.
     - Example
     example-13.js

   - **Async functions**
     - Defining async functions using `async` keyword
      (i) The `async` keyword is used to define a function that returns a Promise implicitly
      (ii) `async function functionName() {...}`

     - Returning Promises implicitly
      (i) An `async` function returns a Promise, even if you do not explicitly return a Promise.
      (ii) The value return from an `async` function is automatically wrapped in a Promise.

     - Combining async/await with try/catch for error handling
      Use the `try/catch` block inside `async` functions to handle errors that might be thrown by `await`.

     - Example
        example-14.js

## 7. Practical Examples and Exercises
   - **Example: Fetching data with Promises**
     ```javascript
     const fetchData = () => {
       return new Promise((resolve, reject) => {
         setTimeout(() => {
           const data = { user: 'John Doe' };
           resolve(data);
         }, 1000);
       });
     };

     fetchData().then(data => console.log(data)).catch(error => console.error(error));
     ```
     *Explanation*
     (i) `fetchData` returns a Promise that resolves with some data after 1 second.
     (ii) `then` is used to log the data when the Promise is resolved.
     (iii) `catch` is used to log any error when the Promise is rejected.
     
   - **Example: Fetching data with Async/Await**
     ```javascript
     const fetchData = async () => {
       try {
         const data = await new Promise((resolve, reject) => {
           setTimeout(() => {
             const data = { user: 'John Doe' };
             resolve(data);
           }, 1000);
         });
         console.log(data);
       } catch (error) {
         console.error(error);
       }
     };

     fetchData();
     ```
   - **Exercise: Convert a callback-based function to use Promises**
   - **Exercise: Implement a function using async/await to fetch data from an API**

## 8. Resources and Further Reading
   - [MDN Web Docs: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
   - [MDN Web Docs: async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
   - [JavaScript Info: Promises](https://javascript.info/promise-basics)
   - [Node.js Documentation: Util.promisify](https://nodejs.org/dist/latest-v12.x/docs/api/util.html#util_util_promisify_original)
