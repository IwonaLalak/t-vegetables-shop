import React, {Component} from 'react'
import {connect} from "react-redux";
import Stepper from "../../shared/Stepper/Stepper";
import CheckProductsStage from "./components/stages/CheckProductsStage";
import FillOrderFormStage from "./components/stages/FillOrderFormStage";
import MakePaymentStage from "./components/stages/MakePaymentStage";
import {changeQuantity, removeFromBasket, resetBasket} from "../../redux_storage/basket/operations";
import {orderModel} from "../../_consts/models/models";
import {resetOrder, setOrder} from "../../redux_storage/order/operations";
import {confirmedDataStatuses} from "../../_consts/constvalues/constoptions";

class BasketView extends React.Component {

    state = {
        active: 1,
        basket: [],
        order: null,
        confirmedData: null
    };

    componentDidMount() {
        this.setState({
            basket: this.props.basket,
            order: orderModel(),
            confirmedData: confirmedDataStatuses(-1)
        })

        if (Boolean(this.props.order)) {
            this.setState({
                order: this.props.order,
                confirmedData: confirmedDataStatuses(1)
            })
        }
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
            this.setState({
                basket: this.props.basket
            })
        })
    };

    handleSubmitOrderForm = (order) => {
        this.props.setOrder(order).then(() => {
            this.setState({
                order: order,
                confirmedData: confirmedDataStatuses(1)
            });
        });
    };

    handleChangeForm = () => {
        this.setState({
            confirmedData: confirmedDataStatuses(0)
        })
    };

    handleClearStore = () => {

        Promise.all(
            [
                this.props.resetBasket(),
                this.props.resetOrder()
            ]
        ).then(() => {
            setTimeout(()=>this.props.history.push('/'),3000);
        })
    };

    render() {

        let {active, basket, order, confirmedData} = this.state;

        const stages = [
            {
                step: 1,
                title: 'step 1',
                subtitle: 'check products',
                content: <CheckProductsStage basket={basket}
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
                content: <FillOrderFormStage order={order}
                                             confirmedData={confirmedData}
                                             handleSubmitOrderForm={this.handleSubmitOrderForm}
                                             handleChangeForm={this.handleChangeForm}
                />
            },
            {
                step: 3,
                title: 'step 3',
                subtitle: 'make payment',
                content: <MakePaymentStage basket={basket} handleClearStore={this.handleClearStore}/>
            },
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
    basket: state.basket.arr,
    order: state.order.obj
});

const mapDispatchToProps = dispatch => ({
    removeFromBasket: id => dispatch(removeFromBasket(id)),
    changeQuantity: (id, quantity) => dispatch(changeQuantity(id, quantity)),
    setOrder: item => dispatch(setOrder(item)),
    resetBasket: () => dispatch(resetBasket()),
    resetOrder: () => dispatch(resetOrder())
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketView)