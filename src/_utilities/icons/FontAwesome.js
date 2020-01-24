import * as React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBasket, faTachometerAlt, faHome, faPlus, faTimes, faSave, faEdit, faTrash, faImage, faBahai} from '@fortawesome/free-solid-svg-icons'


export const Spin = () => {
    return <FontAwesomeIcon icon={faBahai} spin={true}/>
};
export const Home = () => {
    return <FontAwesomeIcon icon={faHome}/>
};
export const Basket = () => {
    return <FontAwesomeIcon icon={faShoppingBasket}/>
};
export const Panel = () => {
    return <FontAwesomeIcon icon={faTachometerAlt}/>
};
export const Image = () => {
    return <FontAwesomeIcon icon={faImage}/>
};
export const Plus = () => {
    return <FontAwesomeIcon icon={faPlus}/>
};
export const Times = () => {
    return <FontAwesomeIcon icon={faTimes}/>
};
export const Save = () => {
    return <FontAwesomeIcon icon={faSave}/>
};
export const Edit = () => {
    return <FontAwesomeIcon icon={faEdit}/>
};
export const Delete = () => {
    return <FontAwesomeIcon icon={faTrash}/>
};


