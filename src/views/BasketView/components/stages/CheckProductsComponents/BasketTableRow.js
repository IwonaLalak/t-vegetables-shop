import React from 'react';
import {Trash} from "../../../../../_utilities/icons/FontAwesome";
import {formatMoney} from "../../../../../_utilities/formaters/money";
import {Image} from "react-bootstrap";
import BuyForm from "../../../../HomeView/components/forms/BuyForm";

const BasketTableRow = ({item, handleClickRemove, handleChangeQuantity,handleDecrease,handleIncrease}) => {
    return (
        <tr>
            <td className={'product-image'}>
                <Image thumbnail={true} src={item.url} alt={'Item image - ' + item.name}/>
            </td>
            <td className={'product-name'}>
                {item.name}
            </td>
            <td className={'product-amount'}>
                <BuyForm quantity={item.quantity}
                         dontShowBuyButton={true}
                         disableInput={true}
                         handleChange={(value)=>handleChangeQuantity(item,value)}
                         handleDecrease={()=>handleDecrease(item)}
                         handleIncrease={()=>handleIncrease(item)}
                         handleSetAlert={()=>{console.log('please use enter to approve quantity')}}
                />
            </td>
            <td className={'product-per'}>
                {item.per}
            </td>
            <td>
                <div className={'product-sum'}>
                    {formatMoney(item.price * item.quantity)}
                </div>
                <div className={'product-price'}>
                    ({formatMoney(item.price)} per {item.per})
                </div>
            </td>
            <td className={'trash-action'}>
                <div onClick={() => handleClickRemove(item)}>
                    <Trash/>
                </div>
            </td>
        </tr>
    );
};

export default BasketTableRow;