import React from 'react';

const List = ({ data, renderElement }) => {
    const elements = data.map((element) => renderElement(element));

    return (
        <div>
            <h2>Your accounts:</h2>
            { elements }
        </div>
    );
};

export default List;