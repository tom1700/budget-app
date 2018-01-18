import React, { Component } from 'react';
import className from 'classnames';
import './SideMenu.css';

class SideMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen
        })
    };

    render() {
        const { children, menuItems } = this.props;
        const { isOpen } = this.state;
        const hamburgerMessage = isOpen ? 'Close' : 'Menu';
        const menuClass = className({
            menu: true,
            visible: this.state.isOpen,
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

export default SideMenu;