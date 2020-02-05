import React, {Component} from 'react'
import {connect} from "react-redux";
import Stepper from "../../shared/Stepper/Stepper";
import CheckProductsStage from "./components/stages/CheckProductsStage";
import FillOrderFormStage from "./components/stages/FillOrderFormStage";
import MakePaymentStage from "./components/stages/MakePaymentStage";
import {changeQuantity, removeFromBasket} from "../../redux_storage/basket/operations";
import {orderModel} from "../../_consts/models/models";

class BasketView extends React.Component {

    state = {
        active: 1,
        basket: [],
        order: null,
    };

    componentDidMount() {
        this.setState({
            basket: this.props.basket,
            order: orderModel()
        })
    }


    onClickRemove = item => {
        this.props.removeFromBasket(item.id).then(() =>
            this.setState({
                basket: this.props.basket
            }))
    };

    onChangeQuantity = (item, value) => {
        this.changeQuantity(item.id, value)
    };

    onIncrease = item => {
        console.log(item)
        if (item.quantity < 1000) {
            this.changeQuantity(item.id, item.quantity + 1)
        }
    };

    onDecrease = item => {
        if (item.quantity > 1) {
            this.changeQuantity(item.id, item.quantity - 1)
        }
    };

    changeQuantity = (id, value) => {
        this.props.changeQuantity(id, value).then(() => {
            console.log('changed quantity in basket')
            this.setState({
                basket: this.props.basket
            })
        })
    }

    handleSubmitOrderForm = (order) => {
        this.setState({order})
    };

    render() {

        let {active, basket, order} = this.state;

        const stages = [
            {
                step: 1, title: 'step 1', subtitle: 'check products', content: <CheckProductsStage basket={basket}
                                                                                                   handleClickRemove={this.onClickRemove}
                                                                                                   handleChangeQuantity={this.onChangeQuantity}
                                                                                                   handleDecrease={this.onDecrease}
                                                                                                   handleIncrease={this.onIncrease}
                />
            },
            {
                step: 2,
                title: 'step 2',
                subtitle: 'fill order form',
                content: <FillOrderFormStage order={order} handleSubmitOrderForm={this.handleSubmitOrderForm}/>
            },
            {step: 3, title: 'step 3', subtitle: 'make payment', content: <MakePaymentStage/>},
        ];

        return (
            <div id={'BasketView'}>
                <Stepper stages={stages}
                         handleClickStep={(active) => this.setState({active})}
                         active={active}
                />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    basket: state.basket.arr
});

const mapDispatchToProps = dispatch => ({
    removeFromBasket: id => dispatch(removeFromBasket(id)),
    changeQuantity: (id, quantity) => dispatch(changeQuantity(id, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketView)