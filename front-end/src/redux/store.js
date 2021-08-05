import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ServicesReducer } from "./services/reducerService";
import { réalisationReducer } from "./Nos réalisations/reducerRéalisations"
const Reducers = combineReducers({
  serviceStore: ServicesReducer,
  réalisationStore: réalisationReducer
});

const store = createStore(Reducers, applyMiddleware(thunk));
export default store;
