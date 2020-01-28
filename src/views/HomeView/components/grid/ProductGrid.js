import React from 'react';
import ProductItem from "./ProductItem";
import {Row} from "react-bootstrap";

function ProductGrid({products}) {
    return (
        <div id={'ProductGrid'}>
            <Row>
                {
                    products.map(item=>
                        <ProductItem key={item.id} item={item} />
                    )
                }
            </Row>
        </div>
    );
}

export default ProductGrid;