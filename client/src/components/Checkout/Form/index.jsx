import React from 'react';
import {classes} from '../style';

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            cardName: '',
            expiryMonth: '',
            expiryYear: '',
            cardCCV: ''
        };
        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value; //target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        console.log('Change detected. State updated. New state:  ' + name + ' = ' + value);
    }

    handleSubmit(event) {
        alert('A form was submitted: ' + this.state.cardNumber + ' // ' + this.state.cardName + ' // ' + this.state.expiryMonth + ' // ' + this.state.expiryYear + ' // ' + this.state.cardCCV);
        event.preventDefault();
    }

    render() {
        const {
            checkoutBtn,
            text,
            input,
            inputForm,
            test,
        } = classes;

        return (
            <div>
                <form onSubmit={this.handleSubmit}
                      className={inputForm}>
                    <fieldset className={text}>
                        <label>Card number &nbsp;</label>
                        <input type="text"
                               name="cardNumber"
                               value={this.state.cardNumber}
                               onChange={this.handleChange}
                               className={input}
                               maxLength="16"
                        />
                    </fieldset>
                    <fieldset className={text}>
                        <label>Card name &nbsp;</label>
                        <input name="cardName"
                               type="num"
                               value={this.state.cardName}
                               onChange={this.handleChange}
                               className={input}
                               id="cardName"
                        />
                    </fieldset>
                    <fieldset className={text}>
                        <label>Expiration date &nbsp;</label>
                        <div className={test}>
                            <select className={input}
                                    name="expiryMonth"
                                    value={this.state.expiryMonth}
                                    onChange={this.handleChange}
                            >
                                <option></option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                        </div>
                        <span className={text}>&nbsp;/&nbsp;</span>
                        <div className={test}>
                            <select className={input}
                                    name="expiryYear"
                                    value={this.state.expiryYear}
                                    onChange={this.handleChange}
                            >
                                <option></option>
                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset className={text}>
                        <label>CCV&nbsp;</label>
                        <input name="cardCCV"
                               type="text"
                               className={input}
                               maxLength="3"
                               value={this.state.cardCCV}
                               onChange={this.handleChange}/>
                        &nbsp;&nbsp;
                        <a href="#">What is CCV?</a>
                    </fieldset>
                    <input type="submit" value="PAY" className={checkoutBtn}/>
                </form>
            </div>
        )
    }
}
export default CheckoutForm;