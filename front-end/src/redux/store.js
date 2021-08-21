import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ServicesReducer } from "./services/reducerService";
import { réalisationReducer } from "./NosRéalisations/reducerRéalisations" 
import { parcoursReducer } from "./NosParcoursDesFormationsSection/reducerParcours";
import { partenairesReducer } from "./NosPartenaires/reducerPartenaires"  
import { témoignagesReducer } from "./Témoignage/reducerTémoignage"
import { actualitéReducer } from "./Actualités/reducerActualités"
//all reducers
const Reducers = combineReducers({
  serviceStore: ServicesReducer,
  réalisationStore: réalisationReducer,
  parcourStore:parcoursReducer,
  partenaireStore:partenairesReducer,
  témoignageStore:témoignagesReducer,
  actualitéStore : actualitéReducer
});
//store
const store = createStore(Reducers, applyMiddleware(thunk));
export default store;
