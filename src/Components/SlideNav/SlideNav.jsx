import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const SlideNav = () => {
    return (
        <div>
            <ul>
                <li><ActiveLink  to="/about/customer">Customer</ActiveLink></li>
                <li><ActiveLink  to="/about/product">Product</ActiveLink></li>
                <li><ActiveLink  to="/about/order">Order</ActiveLink></li>
                <li><ActiveLink  to="/about/inventory">Inventory</ActiveLink></li>
            </ul>
        </div>
    );
};

export default SlideNav;