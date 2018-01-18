import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuNavLink.css';

const MenuNavLink = ({ children, ...props }) => (
    <NavLink className="menu-nav-link" activeClassName="active" { ...props } >{ children }</NavLink>
);

export default MenuNavLink;
