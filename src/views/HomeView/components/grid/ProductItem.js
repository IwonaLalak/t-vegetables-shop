import React from 'react';
import {Col, Card} from "react-bootstrap";
import {formatMoney} from "../../../../_utilities/formaters/money";
import BuyForm from "../forms/BuyForm";

class ProductItem extends React.Component {

    state = {
        quantity: 1,
        inBasket: false,
    }

    componentDidMount() {
        console.log(this.props)
    }


    decreaseQuantity = () => {
        this.setState(prevState => {
            if (prevState.quantity !== 0)
                return (
                    {
                        quantity: prevState.quantity - 1,
                    }
                )
        });
    }

    increaseQuantity = () => {
        this.setState(prevState => {
            if (prevState.quantity !== 1000)
                return ({
                        quantity: prevState.quantity + 1,
                    }
                )
        });
    }

    onChangeQuantity = ({values: {quantity}}) => {
        this.setState({quantity})
    }

    onClickBuy = () => {
        console.log(this.props.item)
        console.log('buy..')
        this.setState({inBasket:true})
    }

    render() {
        let {item: {url, name, price, per, id}} = this.props;
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
                                           x {per} in basket...
                                        </div>
                                }
                        </Card.Footer>
                    </Card>
                </div>
            </Col>
        );
    }
}

export default ProductItem;