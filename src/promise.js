function timeout(ms) {
  return new Promise((resolve, reject) => {
    //setTimeout(resolve, ms, 'resolved');

    reject('rejected');
    // reject(new Error('rejected with an Error'));
  });
}

timeout(1000).then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.error(error);
  }
);


const p = new Promise((resolve, reject) => {
  //return resolve('test');

  //return reject('test');

  return reject(new Error('test'));
  // try {
  //   throw new Error('test');
  // } catch(e) {
  //   reject(e);
  // }

});

p.then(
  (val) => console.log("resolved: ", val)
).catch(
  (err) => console.error("rejected: ", err)
);
