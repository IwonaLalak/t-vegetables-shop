import React, {Component} from 'react'
import ProductsTable from "./components/table/ProductsTable";
import ProductsTableRow from "./components/table/ProductsTableRow";
import {ActionButton} from "../../shared/Buttons/Buttons";
import {Plus} from "../../_utilities/icons/FontAwesome";
import ProductForm from "./components/form/ProductForm";
import {productModel} from "../../_consts/models/models";

import {connect} from 'react-redux'
import {addProduct, deleteProduct, editProduct, getProducts} from "../../redux_storage/products/operations";
import {generateNextId} from "../../_utilities/iterators/IdsIterator";

class ManageView extends React.Component {

    state = {
        products: [],
        product: null,
        showForm: false,
    }

    componentDidMount() {
        this.props.getProducts().then(() => {
            this.getProducts();
        })

        this.setEmptyProduct()
    }

    getProducts = () => {
        this.setState({products: this.props.products})
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

        if (product.id !== null && product.id !== undefined) {
            // save edit

            this.props.editProduct(
                product
            ).then(() => {
                this.closeForm();
                this.getProducts();
            })

        } else {
            // add

            this.props.addProduct(product).then(() => {
                this.closeForm();
                this.getProducts();
            })
        }
    }

    onClickEdit = (product) => {
        this.setState({product: product, showForm: true});
    }

    onClickDelete = (id) => {
      this.props.deleteProduct(id).then(()=>{
          this.getProducts();
      })
    };

    render() {

        let {products, product, showForm} = this.state;

        return (
            <div id={'ManageView'}>
                <div>
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
                            <ProductsTableRow item={item} handleEdit={this.onClickEdit} handleDelete={this.onClickDelete}/>
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
    addProduct: item => dispatch(addProduct(item)),
    editProduct: item => dispatch(editProduct(item)),
    deleteProduct: id => dispatch(deleteProduct(id)),
    getProducts: () => dispatch(getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageView);