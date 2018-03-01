import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Widget.css';

const Widget = ({ title, link, children, linkTitle }) => (
    <div className="widget">
        <div className="widget__header">
            { title && <h2 className="widget__header__title">{ title }</h2> }
            { link && linkTitle && <Link className="widget__header__link" to={ link }>{ linkTitle }</Link> }
        </div>
        { children }
    </div>
);

Widget.propTypes = {
    children: PropTypes.node,
    link: PropTypes.string,
    linkTitle: PropTypes.string
};

export default Widget;