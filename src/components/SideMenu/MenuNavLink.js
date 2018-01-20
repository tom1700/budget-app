import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuNavLink.css';

const MenuNavLink = ({ children, ...props }) => (
    <NavLink className="menu-nav-link" activeClassName="active" { ...props } >{ children }</NavLink>
);

MenuNavLink.propTypes = {
    children: PropTypes.string.isRequired
};

export default MenuNavLink;
