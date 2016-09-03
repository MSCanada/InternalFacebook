export default (storageName, key, name) => store => next => action => {
  const prev = store.getState()[key][name];
  const result = next(action);
  const state = store.getState()[key][name];
  console.log("Previous is");
  console.log(JSON.stringify(prev));
   console.log("State is");
   console.log(JSON.stringify(state));
 console.log("Result is");
    console.log(result);

  if (state !== prev) {
    localStorage.setItem(storageName, JSON.stringify(state));
  }
  return result;
};
