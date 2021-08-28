import { applyMiddleware, combineReducers, createStore } from "redux";
import auth from "./reducers/auth";
import conversations from "./reducers/conversations";
import messages from "./reducers/messages";
import companion from "./reducers/companion";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  auth,
  conversations,
  messages,
  companion,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
