import { combineReducers } from 'redux'
import * as types from './types'
import set from 'lodash/set'
import { size } from 'lodash'

const defaultCartState = []

// CART REDUCER
const cartReducer = (state = defaultCartState, { type, payload }) => {
  switch (type) {
    case types.ADD_TO_CART:
      return state.includes(payload) ? state : state = [...state, payload]
    case types.REMOVE_FROM_CART:
      return state.filter(id => id !== payload)
    case types.RESET_CART:
      return state = defaultState
    default:
      return state
  }
}

const defaultFavoriteState = [];
const favoriteReducer = (state = defaultFavoriteState, { type, payload }) => {
  switch (type) {
    case types.favorites.ADD: 
      return state.includes(payload) ? state : state = [...state, payload]
    case types.favorites.REMOVE:
      return state.filter(id => id !== payload)
    case types.favorites.RESET:
      return state = defaultState
    default:
      return state
  }
}

const defaultFiltersState = {
  price: {
    min: 0,
    max: 500
  },
  color: [],
  size: [],
}

const filterReducer = (state = defaultFiltersState, { type, payload }) => {
  switch (type) {
    case types.filters.CHANGE_MAX_PRICE: 
    return set(state, 'price.max', payload);
    case types.filters.CHANGE_MIN_PRICE: 
    return set(state, 'price.min', payload);
    case types.filters.SELECT_COLOR:
        return {
          ...state,
          color: {
            ...state.color = payload
          }
        };
    case types.filters.RESET_PRICE:
      return state = defaultFiltersState
    case types.filters.SELECT_SIZE:
      return {
        ...state,
        size: [...state.size, payload]
      }
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  cart: cartReducer,
  favorites: favoriteReducer,
  filters: filterReducer
}

export default combineReducers(reducers)