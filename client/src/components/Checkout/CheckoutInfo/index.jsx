import {classes} from "../style";
import React from 'react';

class CheckoutInfo extends React.Component {
    render() {
        const {
            header,
            total,
            headerSection,
            cardIcons,
        } = classes;
        return (
            <div className={headerSection}>
                <p className={header}>Please select your payment method!</p>
                <p className={total}>Total payment amount $ {1200}</p>
                <div className={cardIcons}>
                    <img src={require("../img/mastercard.png")} alt="#"/>
                    <img src={require("../img/Visa.png")} alt="#"/>
                    <img src={require("../img/AmericanExpress.png")} alt="#"/>

                </div>
            </div>
        )
    }
}
export default CheckoutInfo