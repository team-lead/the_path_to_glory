export const FILTER_GOODS_BY_PRICE = "FILTER_GOODS_BY_PRICE";
export const GOODS_PRICE = "GOODS_PRICE";

export function filterGoodsByPrice() {
  return async dispatch => {
    let mens = await getGoodsByCategory("mens");
    let womens = await getGoodsByCategory("womens");
    if (window.location.pathname.split("/").includes("womens")) {
      const price = [];
      womens.forEach(item => {
        price.push(+item.price);
      });
      const minPrice = Math.min(...price);
      const maxPrice = Math.max(...price);
      dispatch({
        type: GOODS_PRICE,
        min: minPrice,
        max: maxPrice
      })
      filterPriceByCategory(womens, minPrice, maxPrice, dispatch);
    } else if (window.location.pathname.split("/").includes("mens")) {
      const price = [];
      mens.forEach(item => {
        price.push(+item.price);
      });
      const minPrice = Math.min(...price);
      const maxPrice = Math.max(...price);
      filterPriceByCategory(mens, minPrice, maxPrice, dispatch);
    }
  };
}

async function getGoodsByCategory(category) {
  let goodsList = [];
  await fetch(`http://localhost:8080/product-list?collection=${category}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(goods => {
      let goodsArr = goods.mens || goods.womens || goods.acs;
      for (let key in goodsArr) {
        let goodItems = {
          id: goodsArr[key]._id,
          name: goodsArr[key].name,
          image: goodsArr[key].image,
          description: goodsArr[key].description,
          price: goodsArr[key].price,
          ref: goodsArr[key].ref,
          new: goodsArr[key].new,
          color: goodsArr[key].color
        };
        goodsList.push(goodItems);
      }
    })
    .catch(err => {
      return new Error(err);
    });
  return goodsList;
}

function filterPriceByCategory(category, minPrice, maxPrice, dispatch) {
  category = category.filter(item => {
    if (item.price && item.price >= minPrice && item.price <= maxPrice) {
      return true;
    }
  });
  dispatch({
    type: FILTER_GOODS_BY_PRICE,
    payload: category
  });
}

// function getMinMaxPrice(category) {}
