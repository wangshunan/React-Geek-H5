const { combineReducers } = require("redux")

const test = (state = 0, action) => {
  return state
}

const user = (state = { name: "zs" }, action) => {
  return state
}

const reducer = combineReducers({
  test,
  user,
})

export default reducer
