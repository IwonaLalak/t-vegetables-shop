import React from 'react';
import {Table} from "react-bootstrap";

const BasketTable = ({children}) => {
    return (
        <Table striped hover>
            <thead>
            <tr>
                <th>IMG</th>
                <th>NAME</th>
                <th>AMOUNT</th>
                <th>PER</th>
                <th>PRICE</th>
                <th>REMOVE</th>
            </tr>
            </thead>
            <tbody>
            {children}
            </tbody>
        </Table>
    );
};

export default BasketTable;