import React from 'react';
import './List.css';

const List = ({ data, ElementComponent, removeElement }) => {
    const elements = data.map((props) => <ElementComponent
        key={props.id}
        removeElement={ removeElement }
        {...props} />
    );

    return (
        <div className="list">
            { elements }
        </div>
    );
};

export default List;