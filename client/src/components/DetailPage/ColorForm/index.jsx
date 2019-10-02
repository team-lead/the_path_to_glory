// import React from 'react'
// import {Field, reduxForm} from 'redux-form'
// import SelectList from 'react-widgets/lib/SelectList'
// import {connect} from 'react-redux'
//
// import 'react-widgets/dist/css/react-widgets.css'
// import {setColor} from "../../../actions/detailGoodsAction";
//
// let colors = ["blue", "green"];
//
// const renderSelectList = ({input, data}) =>
//     <SelectList {...input}
//                 onBlur={() => input.onBlur()}
//                 data={data}/>;
//
// let Radio = props => {
//
//     const {handleSubmit, setColor} = props;
//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Colors:</label>
//                 <Field
//                     onChange={(event)=>{
//                         setColor(event); console.log(event)
//                     }}
//                     // onClick={}
//                     name="color"
//                     component={renderSelectList}
//                     data={colors}/>
//             </div>
//
//         </form>
//     )
// };
//
//
// Radio = reduxForm({form: "reactWidgets"})(Radio);
//
// const mapDispatchToProps = dispatch => {
//     return {
//         setColor:(color)=>dispatch(setColor(color))
//     };
// };
// export default connect(
//     null,
//     mapDispatchToProps
// )(Radio);