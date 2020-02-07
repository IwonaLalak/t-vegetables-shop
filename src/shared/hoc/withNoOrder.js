import React, {Component} from "react";

export default Cmp => {
    return class extends Component {
        render() {
            const {noOrder, ...passedProps} = this.props;
            if(noOrder){
                return <h5 className={'d-flex justify-content-center handle-error'}>There is no data in order form!</h5>
            }else{
                return <Cmp {...passedProps} />;
            }
        }
    }
}