/* eslint-disable react/prop-types */
import './Active.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink to={to} >{children} </NavLink>
    );
};

export default ActiveLink;