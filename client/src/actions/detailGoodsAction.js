export const GET_GOODS_DETAIL = "GET_GOODS_DETAIL";

export  function getGoodsDetailID(id) {        
    return (dispatch) => {
        fetch(`http://localhost:8080/detail/${id}`)
        .then(res => res.json())
        .then(item => {
            let generalArr = item.men.concat(item.women, item.acs)
            let itemArr = []                        
            for(let key in generalArr) {
                let items = {
                    id : generalArr[key]._id,
                    name: generalArr[key].name,
                    image: generalArr[key].image,
                    description: generalArr[key].description,
                    price: generalArr[key].price,
                    ref: generalArr[key].ref,
                    new: generalArr[key].new
                }
                itemArr.push(items)
            }
            dispatch({
                       type: GET_GOODS_DETAIL,
                       payload: itemArr
                   })
            
        })
              
    }
}