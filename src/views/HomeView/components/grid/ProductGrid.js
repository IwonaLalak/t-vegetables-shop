import React from 'react';
import ProductItem from "./ProductItem";
import {Row} from "react-bootstrap";

function ProductGrid({products,basket}) {

    return (
        <div id={'ProductGrid'}>
            <Row>
                {
                    products.map(item=>{
                        let basketItem = basket.find(i=>i.id === item.id);
                        return <ProductItem key={item.id} item={item} basketItem={basketItem}/>
                    })
                }
            </Row>
        </div>
    );
}

export default ProductGrid;