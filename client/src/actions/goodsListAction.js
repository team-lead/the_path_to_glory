// import axios from 'axios';
export const GET_GOODS_DATA_SUCCESS = "GET_GOODS_DATA_SUCCESS"


export function getGoodsData() {
    return async (dispatch) => {
        await fetch("http://localhost:8080/product-list", {
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
            .then(goodsList => {

                
               
       
            let menGoodsList = []
            for(let key in goodsList.men){
                let menGoodsItems = {
                    id: key,
                    name: goodsList.men[key].name,
                    description: goodsList.men[key].description,
                    price: goodsList.men[key].price,
                    image: goodsList.men[key].image,
                    ref: goodsList.men[key].ref,
                    category: goodsList.men[key].category,
                    new: goodsList.men[key].new
                };
            
              menGoodsList.push(menGoodsItems)
          }
            console.log(menGoodsList);

            let womenGoodsList = []
            for(let key in goodsList.women){
                let womenGoodsItems = {
                    id: key,
                    name: goodsList.women[key].name,
                    description: goodsList.women[key].description,
                    price: goodsList.women[key].price,
                    image: goodsList.women[key].image,
                    ref: goodsList.women[key].ref,
                    category: goodsList.women[key].category,
                    new: goodsList.women[key].new
                };
            
                womenGoodsList.push(womenGoodsItems)
          }
            console.log(womenGoodsList);

            let acsGoodsList = []
            for(let key in goodsList.acs){
                let acsGoodsItems = {
                    id: key,
                    name: goodsList.acs[key].name,
                    description: goodsList.acs[key].description,
                    price: goodsList.acs[key].price,
                    image: goodsList.acs[key].image,
                    ref: goodsList.acs[key].ref,
                    category: goodsList.acs[key].category,
                    new: goodsList.acs[key].new
                };
            
                acsGoodsList.push(acsGoodsItems)
          }

            var generalGoodsList = menGoodsList.concat(womenGoodsList, acsGoodsList);
            console.log(generalGoodsList + "general");
            

                dispatch({
                    type: GET_GOODS_DATA_SUCCESS,
                    payload: generalGoodsList
                })
            })
            .catch(err => {
                return new Error(err);
            })
    }
}