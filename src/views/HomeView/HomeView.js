import React, {Component} from 'react'
import {getProducts} from "../../redux_storage/products/operations";
import {connect} from "react-redux";
import ProductGrid from "./components/grid/ProductGrid";

class HomeView extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        let {products, basket} = this.props;
        return (
            <div id={'HomeView'}>
                <ProductGrid products={products} basket={basket}/>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    products: state.products.arr,
    basket: state.basket.arr
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);