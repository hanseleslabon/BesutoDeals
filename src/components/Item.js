import React from 'react';

const Item = (props) => {
    const { item } = props;
    return (
        <div>
            <div>
                {item.title}
            </div>
            <div>
                {item.discount} || {item.tag}
            </div>
            <div>
                {item.price}
            </div>
        </div>
    );
};

export default Item;