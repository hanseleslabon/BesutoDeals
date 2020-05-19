import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid, Chip, Link } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345
    },
    tag: {
        backgroundColor: '#4320ce',
        color: '#fff'
    },
    discount: {
        backgroundColor: theme.palette.error.main,
        color: '#fff'
    }
}));

const Item = (props) => {
    const { item } = props;
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} lg={4} xl={3} style={{ padding: 20 }}>
            <Card className={classes.root}>
                <CardActionArea>
                    <Link size='small' color='primary' href={`/items/${item.name}`}>
                        <CardMedia
                            component='img'
                            alt={`${item.name}`}
                            image={`/static/images/games/switch/${item.id}.jpg`}
                            title={`${item.name}`}
                        />
                        <CardContent>
                            <Typography variant='h6' component='h6'>
                                {item.title}
                                <Chip className={classes.discount} size='small' label={item.discount} />
                                <Chip className={classes.tag} size='small' label={item.tag} />
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                {item.price}
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Item;