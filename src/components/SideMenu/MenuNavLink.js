import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuNavLink = ({ to }) => (
    <NavLink to={ to } className="menu-nav-link" activeClassName="active" />
);

export default MenuNavLink;
