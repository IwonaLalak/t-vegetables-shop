import * as React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBasket, faTachometerAlt, faHome, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
    return <FontAwesomeIcon icon={faHome}/>
};
export const Basket = () => {
    return <FontAwesomeIcon icon={faShoppingBasket}/>
};
export const Panel = () => {
    return <FontAwesomeIcon icon={faTachometerAlt}/>
};
export const Edit = () => {
    return <FontAwesomeIcon icon={faEdit}/>
};
export const Delete = () => {
    return <FontAwesomeIcon icon={faTrash}/>
};


