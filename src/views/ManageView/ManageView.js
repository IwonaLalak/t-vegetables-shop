import React, {Component} from 'react'
import ProductsTable from "./components/table/ProductsTable";
import ProductsTableRow from "./components/table/ProductsTableRow";
import {ActionButton} from "../../shared/Buttons/Buttons";
import {Plus, Search} from "../../_utilities/icons/FontAwesome";
import ProductForm from "./components/forms/ProductForm";
import {productModel} from "../../_consts/models/models";

import {connect} from 'react-redux'
import {addProduct, deleteProduct, editProduct, getProducts} from "../../redux_storage/products/operations";
import ProductSearchInput from "./components/searchinput/ProductSearchInput";
import {Badge} from "react-bootstrap";

class ManageView extends Component {

    state = {
        products: [],
        product: null,
        showForm: false,
        showSearch: false,
        searchValue: '',
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
            this.props.editProduct(
                product
            ).then(() => {
                this.closeForm();
                this.getProducts();
            })

        } else {
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
        this.props.deleteProduct(id).then(() => {
            this.getProducts();
        })
    };

    onSubmitSearch = ({search}) => {
        this.setState({searchValue: search})
        this.filterSearchResults(search)
    };

    filterSearchResults = (search) => {
        if (search === '') {
            this.setState({products: this.props.products})
        } else {

            let results = Array.from(this.props.products).filter(i => i.name.toUpperCase().indexOf(search.toUpperCase()) > -1 || i.per === search || i.price.toString().indexOf(search.replace(',', '.')) > -1);

            this.setState({products: results})
        }
    };

    render() {

        let {products, product, showForm, showSearch, searchValue} = this.state;

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
                                <div className={'float-left'}>
                                    {
                                        !showSearch &&
                                        <>
                                            <span className={'btn-search'}
                                                  onClick={() => this.setState({showSearch: true})}
                                            >
                                                <Search/> show search
                                            </span>
                                            {
                                                searchValue &&
                                                <Badge pill={true} variant={"secondary"}>filter is enabled</Badge>
                                            }
                                        </>
                                    }
                                </div>
                                <div className={'float-right'}>
                                    <ActionButton theme={'success'} text={'Add new'} type={'button'}
                                                  onClick={this.onClickAdd} size={'sm'} icon={<Plus/>}/>
                                </div>
                                <div className={'clearfix'}></div>
                            </>

                    }
                </div>
                <div id={'SearchInput'}>
                    {
                        showSearch &&
                        <ProductSearchInput
                            searchValue={searchValue}
                            handleSubmit={this.onSubmitSearch}
                            handleClickClose={() => this.setState({showSearch: false})}
                        />
                    }
                </div>
                <ProductsTable>
                    {
                        products.length === 0 ?
                            <p>There's no results</p>
                            :
                            products.map(item => (
                                <ProductsTableRow key={item.id}
                                                  item={item}
                                                  handleEdit={this.onClickEdit}
                                                  handleDelete={this.onClickDelete}/>
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