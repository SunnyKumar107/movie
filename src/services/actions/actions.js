export const addToWatchList = (card) => {
  return {
    type: "ADD_TO_LIST",
    card: card,
  };
};

export const removeToWatchLIst = (id) => {
  return {
    type: "REMOVE_TO_LIST",
    id: id,
  };
};
