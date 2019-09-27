export const GET_GOODS_BY_CATEGORY = "GET_GOODS_BY_CATEGORY"


export function filterGoodsByCategory(category) {
    return async dispatch => {
      let mens = await getGoodsByCategory("mens");
      let womens = await getGoodsByCategory("womens");
      
      if (window.location.pathname.split("/").includes("mens" || "mens/new")) {
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
        });
        console.log(womens);
        dispatch({
          type: GET_GOODS_BY_CATEGORY,
          payload: womens
        });
      }
    };
  }


  async function getGoodsByCategory(collection) {
    let goodsList = [];
    await fetch(`http://localhost:8080/product-list?collection=${collection}`)
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
            category: goodsArr[key].category
          };
          goodsList.push(goodItems);
        }
      })
      .catch(err => {
        return new Error(err);
      });
    return goodsList;
  }