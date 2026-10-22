import { legacy_createStore } from "redux"
import articleReducer from "./reducers/articleReducer.js"
const store = legacy_createStore(articleReducer)
export default store
