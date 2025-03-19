// 5. Create a function that returns a Promise which rejects after 2 
// seconds with an error message "Task 3 failed". Handle the rejection 
// with a .catch to log the error message.

function task5() {
	return new Promise((_, reject) => {
	  setTimeout(() => {
		reject("Task 3 failed");
	  }, 2000);
	});
  }
  
task5().catch(error => console.log(error));




// 6. Create a function that returns a Promise which resolves after 
// a random delay between 1 and 5 seconds with the message "Task 1 complete".

function task6() {
	return new Promise((resolve) => {
	  const delay = Math.floor(Math.random() * 5000) + 1000; 
	  setTimeout(() => {
		resolve("Task 1 complete");
	  }, delay);
	});
  }
  
  task6().then(message => console.log(message));


// 7. Create a function that returns a Promise which resolves after a 
// random delay between 1 and 3 seconds with the message "First". 
// Chain another .then that waits for another random delay between 
// 1 and 3 seconds before logging "Second".

function getRandomDelay() {
	return Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
}
function delayedMessage() {
	return new Promise((resolve) => {
	  const delay = getRandomDelay();
	  setTimeout(() => resolve("First"), delay);
	});
}
delayedMessage()
	.then((message) => {
	  console.log(message);
	  return new Promise((resolve) => {
		const delay = getRandomDelay();
		setTimeout(() => resolve("Second"), delay);
	  });
	})
	.then((message) => {
	  console.log(message);
});
  


// 8. Create a function that returns a Promise which rejects after 
// a random delay between 1 and 4 seconds with an error message "Task 3 failed". 
// Handle the rejection with a .catch to log the error message.

function task8() {
	return new Promise((_, reject) => {
	  const delay = Math.floor(Math.random() * 4000) + 1000; 
	  setTimeout(() => {
		reject("Task 3 failed");
	  }, delay);
	});
}
  
task8().catch(error => console.log(error));



// 9. Create a function that returns a Promise which resolves after a
//  random delay between 1 and 5 seconds with the message "Task 1 complete"
//  if the random number is greater than 0.5, otherwise, it should resolve with 
// the message "Task 1 was quick".

function task9() {
	return new Promise((resolve) => {
	  const delay = Math.floor(Math.random() * 5000) + 1000; 
	  setTimeout(() => {
		const randomNumber = Math.random();
		if (randomNumber > 0.5) {
		  resolve("Task 1 complete");
		} else {
		  resolve("Task 1 was quick");
		}
	  }, delay);
	});
}
  
task9().then(message => console.log(message));


// 10. Create a function that returns a Promise which resolves after a 
// random delay between 1 and 4 seconds. If the random number is less than 0.3, 
// reject with an error message "Task 3 failed". Otherwise, resolve with the message
//  "Task 3 complete". Handle the rejection with a .catch to log the error message.

function task10() {
	return new Promise((resolve, reject) => {
	  const delay = Math.floor(Math.random() * 4000) + 1000;
	  setTimeout(() => {
		const randomNumber = Math.random();
		if (randomNumber < 0.3) {
		  reject("Task 3 failed");
		} else {
		  resolve("Task 3 complete");
		}
	  }, delay);
	});
}
  
task10()
	.then(message => console.log(message))
	.catch(error => console.log(error));