import * as React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faUser,
    faShoppingBasket,
    faCheck,
    faCartPlus,
    faTachometerAlt,
    faHome,
    faPlus,
    faMinus,
    faTimes,
    faSave,
    faEdit,
    faTrash,
    faImage,
    faBahai,
    faSearch,
    faAngleLeft,
    faAngleRight,
    faMoneyBillWave,
    faTruck
} from '@fortawesome/free-solid-svg-icons'


export const Spin = () => {
    return <FontAwesomeIcon icon={faBahai} spin={true}/>
};
export const User = () => {
    return <FontAwesomeIcon icon={faUser}/>
};
export const Money = () => {
    return <FontAwesomeIcon icon={faMoneyBillWave}/>
};
export const Truck = () => {
    return <FontAwesomeIcon icon={faTruck}/>
};
export const Home = () => {
    return <FontAwesomeIcon icon={faHome}/>
};
export const Basket = () => {
    return <FontAwesomeIcon icon={faShoppingBasket}/>
};
export const Cart = () => {
    return <FontAwesomeIcon icon={faCartPlus}/>
};
export const Panel = () => {
    return <FontAwesomeIcon icon={faTachometerAlt}/>
};
export const Image = () => {
    return <FontAwesomeIcon icon={faImage}/>
};
export const Search = () => {
    return <FontAwesomeIcon icon={faSearch}/>
};
export const Check = () => {
    return <FontAwesomeIcon icon={faCheck}/>
};
export const Plus = () => {
    return <FontAwesomeIcon icon={faPlus}/>
};
export const Minus = () => {
    return <FontAwesomeIcon icon={faMinus}/>
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
export const Trash = () => {
    return <FontAwesomeIcon icon={faTrash}/>
};
export const ArrowLeft = () => {
    return <FontAwesomeIcon icon={faAngleLeft}/>
};
export const ArrowRight = () => {
    return <FontAwesomeIcon icon={faAngleRight}/>
};


