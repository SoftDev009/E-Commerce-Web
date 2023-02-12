import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions"
const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload
    // Check if the item is already in the cart or not
    let tempItem = state.cart.find((item) => item.id === id)
    // If the item exist in the cart then I will map over the cart and check if the the cart item id matches the Id + color then I will just increase the amount else I will return the cart Item
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })
      return { ...state, cart: tempCart }
      // If the item not exist in the cart then I will create a new item in the cart
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }
  // Remove Item
  if (action.type === REMOVE_CART_ITEM) {
    const { id } = action.payload
    const tempCart = state.cart.filter((item) => item.id !== id)
    return { ...state, cart: tempCart }
  }
  // return state
  throw new Error(`No matching "${action.type}" - action type `)
}

export default cart_reducer
