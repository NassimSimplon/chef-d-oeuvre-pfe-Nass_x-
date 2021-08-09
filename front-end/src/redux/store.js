import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ServicesReducer } from "./services/reducerService";
import { réalisationReducer } from "./NosRéalisations/reducerRéalisations" 
import { parcoursReducer } from "./NosParcoursDesFormationsSection/reducerParcours";
const Reducers = combineReducers({
  serviceStore: ServicesReducer,
  réalisationStore: réalisationReducer,
  parcourStore:parcoursReducer
});

const store = createStore(Reducers, applyMiddleware(thunk));
export default store;
