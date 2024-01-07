const initialState = {
  allCard: [],
};

const makeWatchList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      console.log("reducer", action.card);
      return {
        ...state,
        cardData: action.card,
      };
    default:
      return state;
  }
};

export default makeWatchList;
