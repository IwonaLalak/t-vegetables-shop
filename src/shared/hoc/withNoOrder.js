import React, {Component} from "react";

export default Cmp => {
    return class extends Component {
        render() {
            const {noOrder, ...passedProps} = this.props;
            if(noOrder){
                return <h6>There is no data in order form!</h6>
            }else{
                return <Cmp {...passedProps} />;
            }
        }
    }
}