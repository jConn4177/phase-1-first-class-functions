const receivesAFunction = (param) => {
  param();
};

function returnsANamedFunction() {
  const namedFunction = () => {};
  return namedFunction;
}

const returnsAnAnonymousFunction = () => {
  return function () {};
};
