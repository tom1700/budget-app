import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ScreenWithFormLayout.css';

const ScreenWithFormLayout = ({ title, children, link, linkTitle }) => (
    <div className="screen-with-form-layout">
        { link && linkTitle && <Link className="screen-with-form-layout__link" to={ link }>{ linkTitle }</Link> }
        <div className="screen-with-form-layout__content">
            { title && <h2 className="screen-with-form-layout__title">{ title }</h2> }
            { children }
        </div>
    </div>
);

ScreenWithFormLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    link: PropTypes.string,
    linkTitle: PropTypes.string
};

export default ScreenWithFormLayout;