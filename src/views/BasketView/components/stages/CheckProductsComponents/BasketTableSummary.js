import React from 'react';
import {formatMoney} from "../../../../../_utilities/formaters/money";
import {countPriceSum} from "../../../../../_utilities/operations/numberOperations";

const BasketTableSummary = ({basket}) => {

    return (
        <tr>
            <td colSpan={3}>
            </td>
            <td>
                TOTAL SUM:
            </td>
            <td>
                <h5 id={'basket-summary'}>
                    {formatMoney(countPriceSum(basket))}
                </h5>
            </td>
            <td></td>
        </tr>
    );
};

export default BasketTableSummary;