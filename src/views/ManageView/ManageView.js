import React, {Component} from 'react'
import getVegetables from "../../_database/api";

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
        return (
            <div id={'ManageView'}>
                {
                    this.state.products.map(item=>(<p>{item.name}</p>))
                }
            </div>
        )
    }

}