export const FILTER_GOODS_BY_COLOR = "FILTER_GOODS_BY_COLOR";

export function filterGoodsByColor(color) {
  return async dispatch => {
    let mens = await getGoodsByCategory("mens");
    let womens = await getGoodsByCategory("womens");
    if (window.location.pathname.split("/").includes("womens")) {
      filterColorByCategory(womens, color, dispatch);
    } else if (window.location.pathname.split("/").includes("mens")) {
      filterColorByCategory(mens, color, dispatch);
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

function filterColorByCategory(category, color, dispatch) {
  category = category.filter(item => {
    if (item.color && item.color.includes(color.toLowerCase())) {
      return true;
    }
  });
  dispatch({
    type: FILTER_GOODS_BY_COLOR,
    payload: category
  });
}
