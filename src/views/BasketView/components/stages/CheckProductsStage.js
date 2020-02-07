import React from 'react';
import BasketTable from "./CheckProductsComponents/BasketTable";
import BasketTableRow from "./CheckProductsComponents/BasketTableRow";
import BasketTableSummary from "./CheckProductsComponents/BasketTableSummary";
import withNoProducts from "../../../../shared/hoc/withNoProducts";
import {compose} from "recompose";

const CheckProductsStage = ({basket,handleClickRemove,handleChangeQuantity,handleDecrease,handleIncrease}) => {
    return (
        <div id={'CheckProductsStage'}>
            <h3 className={'stage-title'}>Please check products in your basket</h3>
            <BasketTable>
                {
                    basket.map(item=><BasketTableRow item={item}
                                                     handleClickRemove={handleClickRemove}
                                                     handleChangeQuantity={handleChangeQuantity}
                                                     handleDecrease={handleDecrease}
                                                     handleIncrease={handleIncrease}/>)
                }
                <BasketTableSummary basket={basket}/>
            </BasketTable>
        </div>
    );
};

export default compose(withNoProducts)(CheckProductsStage);