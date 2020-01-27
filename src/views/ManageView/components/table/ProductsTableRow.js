import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {EditDeleteButtonGroup} from "../../../../shared/Buttons/Buttons";

class ProductsTableRow extends Component {

    onClickEdit = (item) => {
        this.props.handleEdit(item)
    }

    onClickDelete = () => {

    }

    render() {
        let {item} = this.props;
        return (<tr>
            <td>
                {item.url}
            </td>
            <td>
                {item.id}
            </td>
            <td>
                {item.name}
            </td>
            <td>
                {item.price}
            </td>
            <td>
                {item.per}
            </td>
            <td>
                <EditDeleteButtonGroup onClickEdit={()=>this.onClickEdit(item)}
                                       onClickDelete={this.onClickDelete}
                                       size={'sm'}
                                       visibleText={false}
                />
            </td>
        </tr>)
    }

}

ProductsTableRow.propTypes = {
    item: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            img: PropTypes.string,
            price: PropTypes.number,
            per: PropTypes.string,
        })
    )
};

export default ProductsTableRow;