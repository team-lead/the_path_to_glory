export const GET_GOODS_CATEGORIES = "GET_GOODS_CATEGORIES"

export function getGoodsCategories(category) {
    console.log(category);
    
    return async (dispatch) => {
        await fetch(`http://localhost:8080/product-list?collection=${category}`)
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
                console.log(goodsArr);
                for(let key in goodsArr) {
                    let categoriesItems = goodsArr[key].category
                    categories.add(categoriesItems)
                    // console.log(categoriesItems);
                }
                let categoriesList = [];
                for(let key of categories) {
                    categoriesList.push(key)
                    console.log(categoriesList);
                }
                let categoryName = null;
                if (window.location.pathname === "/product-list/mens"){
                    categoryName = "man";
                } else if (window.location.pathname === "/product-list/womens") {
                    categoryName = "woman";
                } else if (window.location.pathname === "/product-list/accessories") {
                    categoryName = "accessories";
                }

                let categoriesColors = new Set();
                goodsArr = goods.womens 
                for(let key in goodsArr) {
                    let categoriesItems = goodsArr[key].color
                    // console.log(categoriesItems);
                    categoriesItems.forEach(element => {
                        categoriesColors.add(element)
                        console.log(categoriesColors);
                    });
                }
                let colorsList = [];
                for(let key of categoriesColors) {
                    colorsList.push(key)
                }
                // console.log(colorsList);
                dispatch({
                    type: GET_GOODS_CATEGORIES,
                    payload: categoriesList,
                    payload1: categoryName,
                    payload2: colorsList
                })
            })
            .catch(err => {
                return new Error(err);
            })
        }
    }