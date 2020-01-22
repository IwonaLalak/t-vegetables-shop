import React from 'react';
import {Table} from "react-bootstrap";

const ProductsTable = ({children}) => {
    return (
        <Table striped hover>
            <thead>
            <tr>
                <th>IMG</th>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>PER</th>
                <th>&</th>
            </tr>
            </thead>
            <tbody>
            {children}
            </tbody>
        </Table>
    )
}

export default ProductsTable;