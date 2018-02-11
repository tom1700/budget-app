import React from 'react';

const List = ({ data, renderElement }) => {
    const elements = data.map((element) => renderElement(element));

    return (
        <div>
            { elements }
        </div>
    );
};

export default List;