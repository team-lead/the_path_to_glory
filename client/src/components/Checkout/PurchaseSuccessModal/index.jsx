import React from 'react';
import {classes} from './style';
import { hideCheckoutModal } from '../../../actions/detailGoodsAction';
import {connect} from 'react-redux'

const PurchaseSuccessModal = ({hideCheckoutModal}) => {
  const {modal, text, closeBtn, modalContainer} = classes;
  return (
    <div className={modal}>
      <div className={modalContainer}>
        <p className={text}>Your payment is Succesfull!</p>
        <button onClick={hideCheckoutModal} className={closeBtn}>
          Close
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    hideCheckoutModal: () => dispatch(hideCheckoutModal())
  }
}
 
export default connect(null, mapDispatchToProps)(PurchaseSuccessModal);