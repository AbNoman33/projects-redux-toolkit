const studentMiddleware = (store) => (next) => (action) => {
  console.log(store.getState().counter.count);
  next(action);
};

export default studentMiddleware;
