import React, {Component} from 'react'
import getVegetables from "../../_database/api";
import ProductsTable from "./components/table/ProductsTable";
import ProductsTableRow from "./components/table/ProductsTableRow";
import {ActionButton} from "../../shared/Buttons/Buttons";
import {Plus} from "../../_utilities/icons/FontAwesome";
import ProductForm from "./components/form/ProductForm";
import {productModel} from "../../_consts/models/models";

import {connect} from 'react-redux'
import {getProducts} from "../../redux_storage/products/operations";

class ManageView extends React.Component {

    state = {
        products: [],
        product: null,
        showForm: false,
    }

    componentDidMount() {
        this.props.getProducts()
        this.setEmptyProduct()
    }

    setEmptyProduct = () => {
        this.setState({
            product: productModel()
        })
    }

    closeForm = () => {
        this.setState({showForm: false})
        this.setEmptyProduct();
    }

    onClickAdd = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }))
    }

    onClickCancel = () => {
        this.closeForm();
    }

    onClickSave = (product) => {
        console.log(product);
        this.closeForm();
    }

    onClickEdit = (product) => {
        this.setState({product: product, showForm: true});
    }

    render() {

        let {product, showForm} = this.state;
        let {products} = this.props;

        return (
            <div id={'ManageView'}>
                <div>
                    <button onClick={()=>console.log(this.props)}>props</button>
                    {
                        showForm ?
                            <ProductForm
                                product={product}
                                handleCancel={this.onClickCancel}
                                handleSave={this.onClickSave}
                            />
                            :
                            <>
                                <div className={'float-right'}>
                                    <ActionButton theme={'success'} text={'Add new'} type={'button'}
                                                  onClick={this.onClickAdd} size={'sm'} icon={<Plus/>}/>
                                </div>
                                <div className={'clearfix'}></div>
                            </>

                    }
                </div>
                <ProductsTable>
                    {
                        products.map(item => (
                            <ProductsTableRow item={item} handleEdit={this.onClickEdit}/>
                        ))
                    }
                </ProductsTable>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.arr
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageView);