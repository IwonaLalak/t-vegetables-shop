import React from 'react';
import {formatMoney} from "../../../../../_utilities/formaters/money";

const BasketTableSummary = ({basket}) => {

    const countSummary = () =>{
      let sum = 0;
      for(let i =0; i<basket.length;i++){
          sum = sum + basket[i].price * basket[i].quantity
      }
      return sum;
    };

    return (
        <tr>
            <td colSpan={3}>
            </td>
            <td>
                TOTAL SUM:
            </td>
            <td>
                <h5 id={'basket-summary'}>
                    {formatMoney(countSummary())}
                </h5>
            </td>
            <td></td>
        </tr>
    );
};

export default BasketTableSummary;