import React, { Component } from 'react';

class SideMenu extends Component {
    render() {
        const { children, menuItems } = this.props;

        return (
            <div className="side-menu">
                <div className="content">{ children }</div>
                <div className="menu">
                    { menuItems.map((menuItem, index) => React.cloneElement(menuItem, { key: index.toString() })) }
                </div>
            </div>
        );
    }
}

export default SideMenu;