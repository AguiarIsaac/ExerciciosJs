const testPromise = new Promise((resolve, reject) => {
	setTimeout(function() {
  //corpo
  resolve('First data')}, 1000)
});

testPromise.then(data => console.log(data))
