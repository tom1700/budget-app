import React, { Component } from 'react';
import className from 'classnames';
import { connect } from 'react-redux';
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
        const hamburgerMessage = isOpen ? 'Close' : 'Menu';
        const menuClass = className({
            menu: true,
            visible: isOpen,
        });

        return (
            <div className="side-menu">
                <div className="hamburger" onClick={ this.toggle }>{ hamburgerMessage }</div>
                <div className="content">{ children }</div>
                <div className={ menuClass }>
                    { menuItems.map((menuItem, index) => React.cloneElement(menuItem, { key: index.toString() })) }
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        isOpen: state.sidemenu.isOpen
    }),
    {
        openMenu,
        closeMenu
    }
)(SideMenu);