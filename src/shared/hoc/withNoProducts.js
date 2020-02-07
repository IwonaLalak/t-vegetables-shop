import React, {Component} from "react";

export default Cmp => {
    return class extends Component {
        render() {
            const {noProducts, ...passedProps} = this.props;
            if(noProducts){
                return <h6>There is no products in basket!</h6>
            }else{
                return <Cmp {...passedProps} />;
            }
        }
    }
}