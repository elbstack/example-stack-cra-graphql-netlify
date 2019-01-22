import { combineReducers, createStore as createStoreRedux } from 'redux'

function counterReducer(state = {}, action) {
  switch (action.type) {
    case 'INCREMENT':
      if (typeof state[action.id] !== 'number')
        return { ...state, [action.id]: 0 };
      else
        return { ...state, [action.id]: state[action.id] + 1 };
    case 'DECREMENT':
      if (typeof state[action.id] !== 'number')
        return { ...state, [action.id]: 0 };
      else
        return { ...state, [action.id]: state[action.id] - 1 };
    default:
      return state
  }
}

function sumReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
    case 'DECREMENT':
      return state + 1;
    default:
      return state;
  }
}

export default function createStore() {
  return createStoreRedux(combineReducers({
    counts: counterReducer,
    sum: sumReducer
  }));
}