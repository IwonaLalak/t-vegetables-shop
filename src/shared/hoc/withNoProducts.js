import React, {Component} from "react";

export default Cmp => {
    return class extends Component {
        render() {
            const {noProducts, ...passedProps} = this.props;
            if(noProducts){
                return <h5 className={'d-flex justify-content-center handle-error'}>There is no products in basket!</h5>
            }else{
                return <Cmp {...passedProps} />;
            }
        }
    }
}