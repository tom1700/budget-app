import React from 'react';
import AccountElement from './AccountElement';

const List = ({ data, renderElement }) => {
    return (
        <div>
            <h2>Your accounts:</h2>
            { data.map((element) => renderElement(element)) }
        </div>
    );
};

export default List;