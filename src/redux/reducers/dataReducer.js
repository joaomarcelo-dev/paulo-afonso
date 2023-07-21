import { SET_ALERTS } from "../actions/dataAction"

const INITIAL_STATE = {
  alerts: [],
}

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALERTS:
      return {
        ...state,
        alerts: action.payload,
      }
    default:
      return state
  }
}

export default dataReducer;
