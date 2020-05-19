import React from 'react';
import Item from './Item';
import { Grid } from '@material-ui/core';



const ItemList = (props) => {
    return (
        <Grid
            container
            spacing={0}
            direction='row'
            justify='flex-start'
            alignItems='flex-start'
        >
            {Object.values(props.items).map(item => (
                <Item key={item.id} item={item} />
            ))}
        </Grid>
    );
};

export default ItemList;
