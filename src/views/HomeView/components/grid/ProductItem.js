import React from 'react';
import {Col, Card} from "react-bootstrap";
import {formatMoney} from "../../../../_utilities/formaters/money";
import BuyForm from "../forms/BuyForm";
import {getProducts} from "../../../../redux_storage/products/operations";
import {connect} from "react-redux";
import {changeQuantity} from "../../../../redux_storage/basket/operations";

class ProductItem extends React.Component {

    state = {
        quantity: 1,
        inBasket: false,
    }

    componentDidMount() {
        if (Boolean(this.props.basketItem)) {
            this.setState({inBasket: true, quantity: this.props.basketItem.quantity})
        }
    }


    decreaseQuantity = () => {
        this.setState(prevState => {
                if (prevState.quantity !== 0)
                    return (
                        {
                            quantity: prevState.quantity - 1,
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
                        }
                    )
            },
            () => {
                this.changeQuantityInBasket()
            });
    }

    onChangeQuantity = ({values: {quantity}}) => {

        //todo: walidacja, aby można bylo wprowadzać wartości float, a nie tylko integer

        this.setState(() => ({quantity}),
            () => {
                this.changeQuantityInBasket()
            })
    }

    onClickBuy = () => {
        console.log(this.props.item)
        console.log('buy..')
        this.setState({inBasket: true})
    }

    changeQuantityInBasket = (quantity = this.state.quantity) => {
        if (Boolean(this.props.basketItem)) {
            this.props.changeQuantity(this.props.basketItem.id, quantity)
        }
    };

    render() {
        let {item: {url, name, price, per}} = this.props;
        let {quantity, inBasket} = this.state;

        return (
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                <div id={'ProductItem'}>
                    <Card>
                        <Card.Img variant="top" src={url}/>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {formatMoney(price)} per {per}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <BuyForm
                                quantity={quantity}
                                handleDecrease={this.decreaseQuantity}
                                handleIncrease={this.increaseQuantity}
                                handleChange={this.onChangeQuantity}
                                handleClickBuy={this.onClickBuy}
                                inBasket={inBasket}
                            />
                            {
                                inBasket &&
                                <div>
                                    {quantity} {per} in basket...
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
    changeQuantity: (id, quantity) => dispatch(changeQuantity(id, quantity))
});

export default connect(null, mapDispatchToProps)(ProductItem);