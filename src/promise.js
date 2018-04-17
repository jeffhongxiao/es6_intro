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
