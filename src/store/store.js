import { createStore } from "redux";

import rootReducer from "../services/reducers/rootReducer";

const store = createStore(rootReducer);

export default store;
