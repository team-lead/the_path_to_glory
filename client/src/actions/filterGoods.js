export const FILTER_GOODS_BY_COLOR = "FILTER_GOODS_BY_COLOR";
export const GET_GOODS_BY_CATEGORY = "GET_GOODS_BY_CATEGORY";
export const FILTER_GOODS_BY_PRICE = "FILTER_GOODS_BY_PRICE";
export const GET_PRICE_RANGE = "GET_PRICE_RANGE";
export const GET_GOODS_BY_SUBCATEGORY = "GET_GOODS_BY_SUBCATEGORY";

export function filterGoodsByCategory(category, subCategory) {
  console.log(subCategory);
  console.log(category);
  
  return async dispatch => {
    let mens = await getGoodsByCategory("mens");
    let womens = await getGoodsByCategory("womens");
    let accessories = await getGoodsByCategory("accessories")

    if (window.location.pathname.split("/").includes("mens")) {
      mens = mens.filter(item => {
        if (item.category.toLowerCase() === category.toLowerCase()) {
          return true;
        }
      });
      dispatch({
        type: GET_GOODS_BY_CATEGORY,
        payload: mens
      });
    } else if (window.location.pathname.split("/").includes("womens")) {
      womens = womens.filter(item => {
        if (item.category.toLowerCase() === category.toLowerCase()) {
          return true;
        }
      })
      dispatch({
        type: GET_GOODS_BY_CATEGORY,
        payload: womens
      });
    } else if (window.location.pathname.split("/").includes("accessories")) {
      accessories = accessories.filter(item => {
        console.log(subCategory);
        console.log(item.category);
        
        if (item.subCategory.toLowerCase() === subCategory.toLowerCase()) {
          return true;
        }
      })
      dispatch({
        type: GET_GOODS_BY_SUBCATEGORY,
        payload: accessories
      })
  };
}
}

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
export function filterGoodsByPrice(priceRange) {
  return async dispatch => {
    let mens = await getGoodsByCategory("mens");
    let womens = await getGoodsByCategory("womens");
    let accessories = await getGoodsByCategory("accessories");
    if (window.location.pathname.split("/").includes("womens")) {
      filterColorByPrice(womens, priceRange, dispatch);
    } else if (window.location.pathname.split("/").includes("mens")) {
      filterColorByPrice(mens, priceRange, dispatch);
    } else if (window.location.pathname.split("/").includes("accessories")) {
      filterColorByPrice(accessories, priceRange, dispatch);
    }
  };
}

// export function getPriceRange() {
//   return async dispatch => {
//     let mens = await getGoodsByCategory("mens");
//     let womens = await getGoodsByCategory("womens");
//     let accessories = await getGoodsByCategory("accessories");
//     if (window.location.pathname.split("/").includes("womens")) {
//       getPriceRangeByCategory(womens, dispatch);
//     } else if (window.location.pathname.split("/").includes("mens")) {
//       getPriceRangeByCategory(mens, dispatch);
//     } else if (window.location.pathname.split("/").includes("accessories")) {
//       getPriceRangeByCategory(accessories, dispatch);
//     }
//   };
// }

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
          color: goodsArr[key].color,
          category: goodsArr[key].category,
          subCategory: goodsArr[key].subCategory
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

function filterColorByPrice(category, priceRange, dispatch) {
  category = category.filter(item => {
    if (
      item.price &&
      item.price >= priceRange.min &&
      item.price <= priceRange.max
    ) {
      return true;
    }
  });
  const price = [];
  category.forEach(item => {
    price.push(+item.price);
  });

  const priceValue = {
    min: Math.min(...price),
    max: Math.max(...price)
  };
  dispatch({
    type: FILTER_GOODS_BY_PRICE,
    payload: category,
    priceValue
  });
}

// function getPriceRangeByCategory(category, dispatch) {
//   const price = [];
//   category.forEach(item => {
//     price.push(+item.price);
//   });

//   const priceValue = {
//     min: Math.min(...price),
//     max: Math.max(...price)
//   };
//   dispatch({
//     type: GET_PRICE_RANGE,
//     payload: priceValue
//   });
// }
