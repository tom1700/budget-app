import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../../components/Widget/Widget';
import './ScreenWithListLayout.css';

const ScreenWithListLayout = (props) => {
    return (
        <div className="screen-with-list-layout">
            <div className="screen-with-list-layout__content">
                <Widget {...props} />
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