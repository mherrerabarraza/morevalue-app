import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { employeeReducer } from "../reducers/employeeReducer";
import { empresaReducer } from "../reducers/empresaReducer";
import { examReducer } from "../reducers/examReducer";
import { uiReducer } from "../reducers/uiReducer";
import { userReducer } from "../reducers/userReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  exam: examReducer,
  ui: uiReducer,
  trab: employeeReducer,
  empr: empresaReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
