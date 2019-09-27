import React, { Component } from 'react'
import {connect} from 'react-redux'
import {HANDL_SHENGE_PRICE} from "../../../actions/getGoodsCategoryAction"
import InputRange from 'react-input-range';
import {classes} from "./style"

class PriceSlider extends Component{
    render(){
        const {value} = this.props
        console.log(this.props.value.min)
        return(
            <div className = {classes.priceContainer}>
                <p className = {classes.priceNum}>{`$${this.props.value.min} - $${this.props.value.max}`}</p>
            <InputRange
        maxValue={1000}
        minValue={0}
        value={value}
        onChange={this.props.handleChange} />
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        value:state.allCategories.priceValue
    }
};

const mapDispanchToProps = dispath =>{
    return{
        handleChange:(value)=>dispath({
            type:HANDL_SHENGE_PRICE,
            payload:value
        })
    }
}
export default connect(mapStateToProps,mapDispanchToProps)(PriceSlider);