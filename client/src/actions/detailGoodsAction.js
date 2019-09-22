export const GET_GOODS_DETAIL = 'GET_GOODS_DETAIL';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const SET_CHECKOUT_TOTAL = 'SET_CHECKOUT_TOTAL';
export const DEC_CART_PRODUCT_QUANTITY = 'INC_CART_PRODUCT_QUANTITY';
export const INC_CART_PRODUCT_QUANTITY = 'DEC_CART_PRODUCT_QUANTITY';

export function getGoodsDetailID(id) {
  return dispatch => {
    fetch(`http://localhost:8080/detail/${id}`)
      .then(res => res.json())
      .then(item => {
        let generalArr = item.men.concat(item.women, item.acs);
        let itemArr = [];
        for (let key in generalArr) {
          let items = {
            id: generalArr[key]._id,
            name: generalArr[key].name,
            image: generalArr[key].image,
            description: generalArr[key].description,
            price: generalArr[key].price,
            ref: generalArr[key].ref,
            new: generalArr[key].new,
            color: generalArr[key].color,
            images: generalArr[key].images
          };
          itemArr.push(items);
        }
        dispatch({
          type: GET_GOODS_DETAIL,
          payload: itemArr
        });
      });
  };
}

export function removeProductFromCart(productId) {
  return { type: REMOVE_PRODUCT_FROM_CART, payload: productId };
}

export function setCheckoutTotal(totalValue) {
  return { type: SET_CHECKOUT_TOTAL, payload: totalValue };
}

export function incCartProductQuantity(productId) {
  return { type: INC_CART_PRODUCT_QUANTITY, payload: productId };
}

export function decCartProductQuantity(productId) {
  return { type: DEC_CART_PRODUCT_QUANTITY, payload: productId };
}
