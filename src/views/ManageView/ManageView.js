import React, {Component} from 'react'
import getVegetables from "../../_database/api";
import ProductsTable from "./components/table/ProductsTable";
import ProductsTableRow from "./components/table/ProductsTableRow";
import {ActionButton} from "../../shared/Buttons/Buttons";
import {Plus} from "../../_utilities/icons/FontAwesome";
import ProductForm from "./components/form/ProductForm";

export default class ManageView extends React.Component {

    state = {
        products: [],
        product: {name: '', url: '', price: '', per: 'kg'},
        showForm: false,
    }

    componentDidMount() {
        this.getProducts()
    }

    onClickAdd = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }))
    }

    getProducts = async () => {
        const results = await getVegetables();
        this.setState({products: results.data})
    }

    onClickCancel = () => {
        this.setState({showForm: false})
    }

    onClickEdit = (product) => {
        this.setState({product: product, showForm: true});
    }

    render() {

        let {products, product,showForm} = this.state;

        return (
            <div id={'ManageView'}>
                <div>
                    {
                        showForm ?
                            <ProductForm
                                product={product}
                                handleCancel={this.onClickCancel}
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