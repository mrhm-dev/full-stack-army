# Lecture 99 - Understand REST API# Lecture 99 - Understand REST API

## Table of Contents
1. [Responsibility of a Backend Application Developer](#the-responsibility-of-a-backend-application-developer)
2. [Express JS](#express-js)
3. [Why Data Structure needed?](#why-data-structure-needed)

## The Responsibility of A Backend Application Developer

- [ ] Understand Request Object
- [ ] Understand Routing
- [ ] Understand Middleware
- [ ] Understand How to Generate Response
- [ ] Understand How to write Business Logic
    - [ ] Where and when to create a route
    - [ ] Implements REST API Best Practices
    - [ ] How to design a REST API
    - [ ] How to Secure API Endpoints
    - [ ] How to deal with third-party Part Resources like DB, Mail, File Server
    - [ ] How to understand the Business Logic and integrate it properly


# Express JS

### Why Express?

Express.js is a lightweight and simple framework, making it a cost-effective choice in terms of resources. It's less complex and has a smaller learning curve compared to other frameworks like NestJS, Koa, and Adonis, which are all, interestingly, based on Express.js.

The beauty of Express.js lies in its freedom and flexibility. It doesn't impose any specific structure or convention on your code, allowing you to use any library or middleware you prefer. This is in contrast to other frameworks that require you to follow their specific ways of doing things, limiting your freedom.

Here are some key advantages of Express.js:

1. **Less Dependency**: Express.js uses fewer dependencies, which means it consumes less memory and CPU. This is a significant advantage over other frameworks that have more dependencies and, therefore, consume more resources.
2. **Ease of Learning**: With its less steep learning curve, Express.js is easy to learn and use.
3. **Flexibility**: Express.js offers more flexibility, allowing you to do anything you want.
4. **Freedom of Choice**: With Express.js, you have the freedom to use any library you want.
5. **Control**: Express.js gives you full control over everything in your application.
6. **Performance**: Express.js is known for its fast performance.

For small applications with a few routes, the default HTTP module in Node.js can be used to create a server and handle requests and responses, saving memory and CPU cost. However, for larger applications with many routes, Express.js is the better choice. It helps handle requests and responses more efficiently, saving both time and money.

### Why not use the HTTP module for large applications?

While the HTTP module can be used for small applications, it's not the best choice for larger ones. With the HTTP module, you would need to manually manage JSON stringification every time, which can be time-consuming and lead to duplicate code. Express.js, on the other hand, handles JSON stringification and parsing automatically, making it a more efficient choice for large applications.

---

## Why Data Structure needed?
The Fibonacci example illustrates the importance of using appropriate data structures to optimize algorithms. Let’s review the evolution of the Fibonacci function:
## 1. Fibonacci1 (Recursive):
```js
const fibonacci1 = (num) => {
if (num < 2) {
return num;
}
return fibonacci(num — 1) + fibonacci(num — 2);
}
```
This fibonacci1 function use recursion to calculate the Fibonacci number. It is simple and easy to understand, but it is not efficient. The time complexity is `O(2^n)`, which means the time required to calculate the Fibonacci number increases exponentially as the input increases. This is bad for performance for large Fibonacci numbers. So we can improve the efficiency by using memoization.
## 2. Fibonacci2 (Memoization):
```js
const fibonacci2 = (num, memo) => {
memo = memo || {};
if (memo[num]) {
return memo[num];
}
if (num <= 1) {
return 1;
}
return memo[num] = fibonacci(num — 1, memo) + fibonacci(num — 2, memo);
}
```
Memoization is an optimization technique that stores the results of previous function calls and reuses them when possible. The time complexity is `O(n)`, which is much better than the recursive approach. It takes much time to calculate the 100th Fibonacci number for the first time, but it is much faster to calculate the 100th Fibonacci number for the second time because the result is already stored in the memo object. This is also not good for performance for large Fibonacci numbers. So we can improve the efficiency by using dynamic programming.

## 3. Fibonacci3 (Dynamic Programming):
```js
const fibonacci3 = (num) => {
let answer = [];
let x = 0;
let y = 1;
let z;

answer.push(x);
answer.push(y);

for (let i = 2; i < num; i++) {
z = x + y;
x = y;
y = z;
answer.push(z);
}

return answer.pop();
}
```
This fibonacci3 function use dynamic programming to calculate the Fibonacci number. It is simple and easy to understand. The time complexity is `O(n)`. This function stores the Fibonacci numbers in an array and returns the last element of the array. This is good for performance for large Fibonacci numbers. But The JavaScript Number type cannot represent integers greater than `²⁵³ — 1`. It capacity is limited. So we can improve the efficiency by using data structure `BigInt`.
## 4. Fibonacci4 and Fibonacci5 (Using Data Structure BigInt):
```js
const fibonacci4 = (num) => {
const result = [BigInt(0), BigInt(1)];
for (let i = 2; i <= num; i++) {
const prevNum1 = result[i — 1];
const prevNum2 = result[i — 2];
result.push(prevNum1 + prevNum2);
}
return result[num].toString();
};
```
This fibonacci4 function use data structure `BigInt` to calculate the Fibonacci number. It is simple and easy to understand. The time complexity is `O(n)`. This function stores the Fibonacci numbers in an array and returns the last element of the array. This is much faster and efficient than fibonacci3 function. We can improve the efficiency by using data structure `BigInt`.
```js
const fibonacci5 = (num) => {
let a = BigInt(0);
let b = BigInt(1);
let c = BigInt(0);
for (let i = 2; i <= num; i++) {
c = a + b;
a = b;
b = c;
}
return c.toString();
};

```
This fibonacci5 function use data structure `BigInt` to calculate the Fibonacci number. It is simple and easy to understand. The time complexity is `O(n)`. This function use three variables to store the Fibonacci numbers and returns the last variable.
This is good for performance for large Fibonacci numbers.
**Conclusion:**
We can see different scenarios of Fibonacci function. We can understand the importance of using appropriate data structures to optimize algorithms. We can improve the efficiency by using data structure `BigInt`