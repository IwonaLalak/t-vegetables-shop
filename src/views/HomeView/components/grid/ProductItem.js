import React from 'react';
import {Col, Card} from "react-bootstrap";
import {formatMoney} from "../../../../_utilities/formaters/money";
import BuyForm from "../forms/BuyForm";
import {connect} from "react-redux";
import {addToBasket, changeQuantity, removeFromBasket} from "../../../../redux_storage/basket/operations";
import {InlineRemoveBtn} from "../../../../shared/Buttons/Buttons";


class ProductItem extends React.Component {

    state = {
        quantity: 1,
        inBasket: false,
        setAlert: false,
    }

    componentDidMount() {
        if (Boolean(this.props.basketItem)) {
            this.setState({inBasket: true, quantity: this.props.basketItem.quantity})
        }
    }


    decreaseQuantity = () => {
        this.setState(prevState => {
                if (prevState.quantity !== 1)
                    return (
                        {
                            quantity: prevState.quantity - 1,
                            setAlert: false
                        }
                    )
            },
            () => {
                this.changeQuantityInBasket()
            });
    }

    increaseQuantity = () => {
        this.setState(prevState => {
                if (prevState.quantity !== 1000)
                    return ({
                            quantity: prevState.quantity + 1,
                            setAlert: false
                        }
                    )
            },
            () => {
                this.changeQuantityInBasket()
            });
    }

    onChangeQuantity = ({values: {quantity}}) => {

        //todo: walidacja, aby można bylo wprowadzać wartości float, a nie tylko integer

        this.setState(() => ({
                quantity,
                setAlert: false
            }),
            () => {
                this.changeQuantityInBasket()
            })
    };

    onClickBuy = () => {

        if (this.state.quantity > 0) {
            this.props.addToBasket(
                Object.assign(this.props.item, {quantity: this.state.quantity})
            ).then(() => {
                console.log('added to basket')
                this.setState({inBasket: true})
            })
        }
    };

    changeQuantityInBasket = (quantity = this.state.quantity) => {

        console.log('current value of quantity: ', quantity)

        if (Boolean(this.props.basketItem)) {
            this.props.changeQuantity(this.props.basketItem.id, quantity).then(() => {
                console.log('changed quantity in basket')
            })
        }
    };

    onSetAlert = () => {
        this.setState({
            setAlert: true
        })
    };

    onClickRemove = () => {
        if (Boolean(this.props.basketItem))
            this.props.removeFromBasket(this.props.basketItem.id).then(() => {
                console.log('removed from basket')
                this.setState({
                    inBasket: false,
                    quantity: 1
                })
            })
    };

    render() {
        let {item: {url, name, price, per}} = this.props;
        let {quantity, inBasket, setAlert} = this.state;

        return (
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                <div id={'ProductItem'}>
                    <Card>
                        <div>
                            <Card.Img variant="top" src={url}/>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {formatMoney(price)} per {per}
                                </Card.Text>
                            </Card.Body>
                        </div>
                        <Card.Footer>
                            <BuyForm
                                quantity={quantity}
                                handleDecrease={this.decreaseQuantity}
                                handleIncrease={this.increaseQuantity}
                                handleChange={this.onChangeQuantity}
                                handleClickBuy={this.onClickBuy}
                                handleSetAlert={this.onSetAlert}
                                inBasket={inBasket}
                            />
                            {
                                setAlert &&
                                <div className={'change-alert-info'}>
                                    Press ENTER to accept
                                </div>
                            }
                            {
                                inBasket &&
                                <div className={'quantity-in-basket'}>
                                    <span>
                                        {quantity} {per} in basket
                                    </span>
                                    <InlineRemoveBtn handleClick={this.onClickRemove}/>
                                </div>
                            }
                        </Card.Footer>
                    </Card>
                </div>
            </Col>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    changeQuantity: (id, quantity) => dispatch(changeQuantity(id, quantity)),
    removeFromBasket: id => dispatch(removeFromBasket(id)),
    addToBasket: item => dispatch(addToBasket(item))

});

export default connect(null, mapDispatchToProps)(ProductItem);