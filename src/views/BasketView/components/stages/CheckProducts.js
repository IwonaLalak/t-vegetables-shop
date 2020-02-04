import React from 'react';
import BasketTable from "./CheckProductsComponents/BasketTable";
import BasketTableRow from "./CheckProductsComponents/BasketTableRow";
import BasketTableSummary from "./CheckProductsComponents/BasketTableSummary";

const CheckProducts = ({basket,handleClickRemove,handleChangeQuantity,handleDecrease,handleIncrease}) => {
    return (
        <div id={'CheckProductsStage'}>
            <h2>Please check products in your basket</h2>
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

export default CheckProducts;