const initialState = [];

const makeWatchList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return state.concat(action.card);
    case "REMOVE_TO_LIST":
      return state.filter((e) => e.id !== action.id);
    default:
      return state;
  }
};

export default makeWatchList;
