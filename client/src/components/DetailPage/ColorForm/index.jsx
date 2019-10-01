import React from 'react'
import {Field, reduxForm} from 'redux-form'
import SelectList from 'react-widgets/lib/SelectList'


import 'react-widgets/dist/css/react-widgets.css'
import {setColor} from "../../../actions/detailGoodsAction";

let colors = ["blue", "green", "black"];

const renderSelectList = ({input, data}) =>
    <SelectList {...input}
                onBlur={() => input.onBlur()}
                data={data}/>;

let Radio = props => {

    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Colors:</label>
                <Field
                    onChange={()=>alert('ok')}
                    onClick={()=>setColor("red")}
                    name="sex"
                    component={renderSelectList}
                    data={colors}/>
            </div>

        </form>
    )
};


Radio = reduxForm({
    form: 'reactWidgets'  // a unique identifier for this form
})(Radio);

export default Radio