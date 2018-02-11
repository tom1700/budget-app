import React from 'react';

const List = ({ data, ElementComponent }) => {
    const elements = data.map((props) => <ElementComponent key={props.id} {...props} />);

    return (
        <div>
            { elements }
        </div>
    );
};

export default List;