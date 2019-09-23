export const GET_GOODS_CATEGORIES = "GET_GOODS_CATEGORIES"

export function getGoodsCategories(category) {
    console.log(category);
    
    return async (dispatch) => {
        await fetch(`http://localhost:8080/product-list/${category}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(goods => {
                let categories = new Set();
                let goodsArr = goods.mens || goods.womens || goods.acs
                for(let key in goodsArr) {
                    let categoriesItems = goodsArr[key].category
                    categories.add(categoriesItems)
                }
                let categoriesList = [];
                for(let key of categories) {
                    categoriesList.push(key)
                }
                let categoryName = null;
                if (window.location.pathname === "/product-list/mens"){
                    categoryName = "man";
                } else if (window.location.pathname === "/product-list/womens") {
                    categoryName = "woman";
                } else if (window.location.pathname === "/product-list/accessories") {
                    categoryName = "accessories";
                }
                dispatch({
                    type: GET_GOODS_CATEGORIES,
                    payload: categoriesList,
                    payload1: categoryName
                })
            })
            .catch(err => {
                return new Error(err);
            })
        }
    }