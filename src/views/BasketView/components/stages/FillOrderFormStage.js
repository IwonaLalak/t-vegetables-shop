import React from 'react';
import FillOrderForm from "./FillOrderComponents/FillOrderForm";

const FillOrderFormStage = ({order, confirmedData, handleSubmitOrderForm, handleChangeForm}) => {
    return (
        <div id={'FillOrderStage'}>
            <h3 className={'stage-title'}>
                Fill order form below
            </h3>
            <FillOrderForm order={order}
                           confirmedData={confirmedData}
                           handleSubmitOrderForm={handleSubmitOrderForm}
                           handleChangeForm={handleChangeForm}
            />
        </div>
    );
};

export default FillOrderFormStage;