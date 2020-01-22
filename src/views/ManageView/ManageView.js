import React, {Component} from 'react'
import getVegetables from "../../_database/api";
import ProductsTable from "./components/table/ProductsTable";
import ProductsTableRow from "./components/table/ProductsTableRow";

export default class ManageView extends React.Component {

    state = {
        products: []
    }

    componentDidMount(){
        this.getProducts()
    }

    getProducts = async () =>{
        const results = await getVegetables();
        this.setState({products:results.data})
    }

    render() {

        let {products} = this.state;

        return (
            <div id={'ManageView'}>
                <ProductsTable>
                    {
                        products.map(item=>(
                            <ProductsTableRow item={item} />
                        ))
                    }
                </ProductsTable>
            </div>
        )
    }

}