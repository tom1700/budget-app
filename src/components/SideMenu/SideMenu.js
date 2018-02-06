import React, { Component } from 'react';
import className from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openMenu } from '../../redux/sidemenu/actions';
import { closeMenu } from '../../redux/sidemenu/actions';
import './SideMenu.css';

class SideMenu extends Component {
    toggle = () => {
        const { isOpen, openMenu, closeMenu } = this.props;
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    render() {
        const { children, menuItems, isOpen } = this.props;
        const hamburgerClass = className({
            hamburger: true,
            open: isOpen
        });
        const menuClass = className({
            menu: true,
            visible: isOpen
        });

        return (
            <div className="side-menu">
                <div className={ hamburgerClass } onClick={ this.toggle } />
                <div className="content">{ children }</div>
                <div className={ menuClass }>
                    { menuItems.map((menuItem, index) => React.cloneElement(menuItem, { key: index.toString() })) }
                </div>
            </div>
        );
    }
}

SideMenu.propTypes = {
    children: PropTypes.element.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.element).isRequired,
    isOpen: PropTypes.bool
};

SideMenu.defaultProps = {
    isOpen: false
};

export default connect(
    state => ({
        isOpen: state.sidemenu.isOpen
    }),
    {
        openMenu,
        closeMenu
    }
)(SideMenu);