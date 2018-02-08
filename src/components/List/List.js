import React from 'react';

const List = ({ data, renderElement, title }) => {
    const elements = data.map((element) => renderElement(element));

    return (
        <div>
            <h2>{ title }</h2>
            { elements }
        </div>
    );
};

export default List;