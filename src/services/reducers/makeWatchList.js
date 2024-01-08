const initialState = [];

const makeWatchList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return state.concat(action.card);

    default:
      return state;
  }
};

export default makeWatchList;
