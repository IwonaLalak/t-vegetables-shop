import React from 'react';
import {ActionButton} from "../../../../shared/Buttons/Buttons";
import {Basket, Money, Truck} from "../../../../_utilities/icons/FontAwesome";
import {Alert, Col, Row, Table} from "react-bootstrap";
import {formatMoney} from "../../../../_utilities/formaters/money";
import {countPriceSum} from "../../../../_utilities/operations/numberOperations";
import PaymentService from "../../../../services/PaymentService";
import Loader from "../../../../shared/Loader/Loader";

class MakePaymentStage extends React.Component {
    state = {
        isLoading: false,
        response: null
    };

    onClickPay = () => {
        this.setState({isLoading: true})
        PaymentService.makeFakePayment()
            .then(response => {

                this.setState({
                    isLoading: false,
                    response: response
                })

                this.props.handleClearStore()

            })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    response: 'error'
                })
            })
    };

    render() {

        let {basket} = this.props;
        let {isLoading, response} = this.state;

        return (
            <div id={'MakePaymentStage'}>
                <h3 className={'stage-title'}>Make payment via TestPay</h3>
                <div className={'stage-card'}>
                    <Row>
                        <Col lg={6}>
                            <h6 className={'d-flex justify-content-center'}>Summary:</h6>
                            <Table>
                                <tbody>
                                <tr>
                                    <td>
                                        <Basket/>
                                    </td>
                                    <td>
                                        Products in basket
                                    </td>
                                    <td>
                                        {formatMoney(countPriceSum(basket))}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Truck/>
                                    </td>
                                    <td>
                                        Free delivery
                                    </td>
                                    <td>
                                        {formatMoney(0)}
                                    </td>
                                </tr>
                                <tr className={'font-weight-bolder'}>
                                    <td>

                                    </td>
                                    <td>
                                        TOTAL
                                    </td>
                                    <td>
                                        {formatMoney(countPriceSum(basket))}
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col lg={6}>
                            <h6 className={'d-flex justify-content-center'}>Make a payment</h6>
                            <div className={'d-flex justify-content-center flex-wrap'}>
                                {
                                    isLoading ?
                                        <Loader/>
                                        :
                                        Boolean(response) ?
                                            <>
                                                <Alert variant={response}>
                                                    {response === 'success' ? 'Payment was successful. Your order is being processed.' : 'Payment failed. Please contact support.'}
                                                </Alert>
                                                <h6>You will be redirect in few seconds...</h6>
                                            </>
                                            :
                                            <ActionButton theme={'primary'}
                                                          text={'Click here to pay'}
                                                          size={'lg'}
                                                          icon={<Money/>}
                                                          onClick={this.onClickPay}/>
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default MakePaymentStage;