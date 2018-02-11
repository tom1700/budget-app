import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ScreenWithListLayout.css';

const ScreenWithListLayout = ({ children, link, linkTitle, title }) => {
    return (
        <div className="screen-with-list-layout">
            <div className="screen-with-list-layout__content">
                <div className="screen-with-list-layout__header">
                    { title && <h2 className="screen-with-list-layout__title">{ title }</h2> }
                    { link && linkTitle && <Link className="screen-with-list-layout__link" to={link}>{linkTitle}</Link> }
                </div>
                { children }
            </div>
        </div>
    );
};

ScreenWithListLayout.propTypes = {
    children: PropTypes.node,
    link: PropTypes.string,
    linkTitle: PropTypes.string
};

export default ScreenWithListLayout;