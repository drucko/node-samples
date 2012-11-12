// Defer execution of console.log for one second. As Node.js almost
// never blocks, the callback is being registered for being run at
// a later point in time, and execution continues past the call to
// setTimeout immediately.
setTimeout(function () {
  console.log('Node.js')
}, 1000);

console.log('Hello');