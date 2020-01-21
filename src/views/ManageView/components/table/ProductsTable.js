import React from 'react';
import ProductsTableRow from './ProductsTableRow';
import {Table} from "react-bootstrap";

const Row = ProductsTableRow;

const ProductsTable = ({children}) => {
    return (
        <Table striped bordered hover>
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