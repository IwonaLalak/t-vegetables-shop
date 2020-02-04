import React, {Component} from 'react'
import {connect} from "react-redux";
import Stepper from "./components/Stepper";
import CheckProducts from "./components/stages/CheckProducts";
import FillOrderForm from "./components/stages/FillOrderForm";
import MakePayment from "./components/stages/MakePayment";
import {changeQuantity, removeFromBasket} from "../../redux_storage/basket/operations";

class BasketView extends React.Component {

    state = {
        active: 1,
        basket: []
    };

    componentDidMount() {
        this.setState({
            basket: this.props.basket
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

    render() {

        let {basket} = this.state;

        const stages = [
            {
                step: 1, content: <CheckProducts basket={basket}
                                                 handleClickRemove={this.onClickRemove}
                                                 handleChangeQuantity={this.onChangeQuantity}
                                                 handleDecrease={this.onDecrease}
                                                 handleIncrease={this.onIncrease}
                />
            },
            {step: 2, content: <FillOrderForm/>},
            {step: 3, content: <MakePayment/>},
        ];

        return (
            <div id={'BasketView'}>
                <Stepper stages={stages}
                         handleClickStep={(active) => this.setState({active})}
                         active={this.state.active}
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