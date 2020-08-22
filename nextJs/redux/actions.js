import * as types from './types'

// ADD TO CART
export const addToCart = (id) => ({type: types.ADD_TO_CART, payload: id})

// REMOVE FROM CART
export const removeFromCart = (id) => ({type: types.REMOVE_FROM_CART, payload: id})

// RESET CART
export const resetCart = (id) => ({type: types.RESET_CART})



// ADD TO FAVORITES
export const addToFavorite = (id) => ({type: types.favorites.ADD, payload: id})

// REMOVE FROM FAVORITES
export const removeFromFavorite = (id) => ({type: types.favorites.REMOVE, payload: id})

//RESET FAVORITES
export const resetFavorite = (id) => ({type: types.favorites.RESET})

// FILTERS
export const changeMaxPrice = price => ({type: types.filters.CHANGE_MAX_PRICE, payload: price});
export const changeMinPrice = price => ({type: types.filters.CHANGE_MIN_PRICE, payload: price});
export const resetPrice = () => ({type: types.filters.RESET_PRICE})
export const selectColor = color => ({type: types.filters.SELECT_COLOR, payload: color});
export const selectSize = (size) => ({type: types.filters.SELECT_SIZE, payload:size});
