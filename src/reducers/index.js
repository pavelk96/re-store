import {act} from "@testing-library/react";
import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-cart";


const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  }
}

export default reducer;
