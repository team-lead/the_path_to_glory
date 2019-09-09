export const GET_MENS_GOODS_SUCCESS = "GET_MENS_GOODS_SUCCESS"
export const GET_WOMENS_GOODS_SUCCESS = "GET_WOMENS_GOODS_SUCCESS"
export const GET_ACCESSORIES_GOODS_SUCCESS = "GET_ACCESSORIES_GOODS_SUCCESS"


export function getMensGoods() {
    return async (dispatch) => {
        await fetch("http://localhost:8080/product-list/mens", {
            headers: {
                'Content-Type': 'application/json'
              }
        })
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(mensGoods => {
                console.log(mensGoods.men);

                let menGoodsList = []
            for(let key in mensGoods.men){
                let menGoodsItems = {
                    id: mensGoods.men[key]._id,
                    name: mensGoods.men[key].name,
                    description: mensGoods.men[key].description,
                    price: mensGoods.men[key].price,
                    image: mensGoods.men[key].image,
                    ref: mensGoods.men[key].ref,
                    category: mensGoods.men[key].category,
                    new: mensGoods.men[key].new
                };
            
              menGoodsList.push(menGoodsItems)
          }
          console.log(menGoodsList);
          
                dispatch({
                    type: GET_MENS_GOODS_SUCCESS,
                    payload: menGoodsList
                })
            })
            .catch(err => {
                return new Error(err);
            })
        }
    }

export function getWomensGoods() {
    return async (dispatch) => {
        await fetch("http://localhost:8080/product-list/womens", {
            headers: {
                'Content-Type': 'application/json'
                }
        })
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(womensGoods => {
                console.log(womensGoods.women);

                let womensGoodsList = []
            for(let key in womensGoods.women){
                let womensGoodsItems = {
                    id: womensGoods.women[key]._id,
                    name: womensGoods.women[key].name,
                    description: womensGoods.women[key].description,
                    price: womensGoods.women[key].price,
                    image: womensGoods.women[key].image,
                    ref: womensGoods.women[key].ref,
                    category: womensGoods.women[key].category,
                    new: womensGoods.women[key].new
                };
            
                womensGoodsList.push(womensGoodsItems)
            }
            console.log(womensGoodsList);
            
                dispatch({
                    type: GET_WOMENS_GOODS_SUCCESS,
                    payload: womensGoodsList
                })
            })
            .catch(err => {
                return new Error(err);
            })
        }
    }

export function getAcsGoods() {
return async (dispatch) => {
    await fetch("http://localhost:8080/product-list/accessories", {
        headers: {
            'Content-Type': 'application/json'
            }
    })
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText)
            }
            return response
        })
        .then(response => response.json())
        .then(acsGoods => {
            console.log(acsGoods.acs);

            let acsGoodsList = []
        for(let key in acsGoods.acs){
            let acsGoodsItems = {
                id: acsGoods.acs[key]._id,
                name: acsGoods.acs[key].name,
                description: acsGoods.acs[key].description,
                price: acsGoods.acs[key].price,
                image: acsGoods.acs[key].image,
                ref: acsGoods.acs[key].ref,
                category: acsGoods.acs[key].category,
                new: acsGoods.acs[key].new
            };
        
            acsGoodsList.push(acsGoodsItems)
        }
        console.log(acsGoodsList);
        
            dispatch({
                type: GET_ACCESSORIES_GOODS_SUCCESS,
                payload: acsGoodsList
            })
        })
        .catch(err => {
            return new Error(err);
        })
    }
}