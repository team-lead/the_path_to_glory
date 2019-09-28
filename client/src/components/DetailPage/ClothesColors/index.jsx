import React, { Fragment } from 'react';
import { classes } from "../style"
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux";
// const  { DOM: { input, select, textarea } } = 'React'

// export default function Colors(props) {
//     const showColors = () => {
//         return (
//             <Fragment>
//             <h3 className = {classes.h3}>Color</h3>
//                 <div className = {classes.colorsDiv}>
//                     <input style = {{background: `${props.colors[0]}`}} >
//                         <label>{props.colors[0]}</label>
//                     </input>
//                     <div style = {{background: `${props.colors[1]}`}}>
//                         <span>{props.colors[1]}</span>
//                     </div>
//                  </div>
//         </Fragment>
//         )
//     }
//     console.log(props);
//     return (
//         <Fragment>
//         {showColors()}
//         </Fragment>
//     )
// }
let ColorForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.colorsDiv} >
                <label>Colors</label>
                <div>
                    <label>
                        <Field name="color" component="input" type="radio" value="green" />{' '}
                        Male`${props.color[0]}`
                    </label>
                    <label>
                        <Field name="color" component="input" type="radio" value="blue" />{' '}
                        Female
                    </label>
                    <label>
                        <Field name="color" component="input" type="radio" value="other" />{' '}
                        Other
                    </label>
                </div>
            </div>



            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>

            </div>
        </form>
    )
};



ColorForm = connect(
    mapStateToProps,
)(ColorForm);
export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(ColorForm)