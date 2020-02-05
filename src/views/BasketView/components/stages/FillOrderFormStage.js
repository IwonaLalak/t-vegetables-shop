import React from 'react';
import FillOrderForm from "./FillOrderComponents/FillOrderForm";

const FillOrderFormStage = ({order, handleSubmitOrderForm}) => {
    return (
        <div id={'FillOrderStage'}>
            <h3 className={'stage-title'}>
                Fill order form below
            </h3>
            <FillOrderForm order={order} handleSubmitOrderForm={handleSubmitOrderForm}/>
        </div>
    );
};

export default FillOrderFormStage;