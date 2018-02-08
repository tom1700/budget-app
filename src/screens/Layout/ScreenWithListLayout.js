import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ScreenWithListLayout = ({ children, link, linkTitle }) => {
    return (
        <div className="screen-with-list-layout">
            { link && linkTitle && <Link className="screen-with-list-layout__link" to={link}>{linkTitle}</Link> }
            { children }
        </div>
    );
};

ScreenWithListLayout.propTypes = {
    children: PropTypes.node,
    link: PropTypes.string,
    linkTitle: PropTypes.string
};

export default ScreenWithListLayout;