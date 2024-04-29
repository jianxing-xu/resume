// promise.all 必须所有成功，一个失败直接整个失败
Promise.myAll = function <T>(promises: Promise<T>[]) {
  let count = promises.length;
  const results = Array(count);
  return new Promise((resolve, reject) => {
    for (let index = 0; index < count; index++) {
      const promise = promises[index];
      promise
        .then(res => {
          count--;
          results[index] = res;
          if (count === 0) resolve(results);
        })
        .catch(reject);
    }
  });
};

// promise.allSettle 所有Promise都完成,直接resolve,没有reject
Promise.myAllSettle = function <T>(promises: Promise<T>[]) {
  let count = promises.length;
  const results = Array(count);
  return new Promise((resolve, reject) => {
    for (let index = 0; index < count; index++) {
      const promise = promises[index];
      promise
        .then(res => (results[index] = res))
        .catch(err => (results[index] = err))
        .finally(() => {
          count--;
          if (count === 0) resolve(results);
        });
    }
  });
};

// promise.race 顾名思义,谁最快就是谁,不管成功或失败
Promise.myRace = function (promises) {
  let count = promises.length;
  return new Promise((resolve, reject) => {
    for (let index = 0; index < count.length; index++) {
      promises[index].then(resolve).catch(reject);
    }
  });
};

// promise.any 返回第一个成功的promise结果，所有失败最终失败
Promise.myAny = function (promises) {
  let count = promises.length;
  return new Promise((resolve, reject) => {
    promises.forEach(p => {
      p.then(resolve).catch(() => {
        count--;
        if (count === 0) reject("AggregateError: All promises were rejected");
      });
    });
  });
};
