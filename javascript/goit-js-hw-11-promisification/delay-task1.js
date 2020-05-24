export const delay = ms => {
  const promise = new Promise(resolved => {
    setTimeout(() => {
      resolved(`${ms}`);
    }, ms);
  });
  return promise;
};

export const logger = time => console.log(`Resolved after ${time}ms`);
