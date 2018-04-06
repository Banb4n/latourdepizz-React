// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

export type Categories = 'Pizza' | 'salades' | 'pate' | 'dessert';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
};

class CardDishes extends React.Component<*> {
    static defaultPicture = 'data:image/jpeg;base64,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';

    props: {
        title?: string,
        type: Categories,
        picture?: string,
        content: Object,
        price: number,
        note?: number,
        // material-ui card props
        classes: Object
    };

    static defaultProps = {
        title: 'Nom du plat',
        content: {
            ingredients: ['Tomate', 'fromage', 'poulet', 'basilic', 'chevre'],
            warning: ['lait, farine']
        },
        picture: CardDishes.defaultPicture,
        note: 0
    };
    render() {
        const {
            title,
            type,
            picture,
            content,
            price,
            note,
            classes
        } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={picture}
                        title="Contemplative Reptile"
                    />
                    <CardContent align={'left'}>
                        <Typography gutterBottom variant="headline" component="h2">
                            {title}
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            {`${price} euros`}
                        </Button>
                        {/*<Button size="small" color="primary">*/}
                            {/*<Icon style={{ fontSize: 30 }}>favorite</Icon>*/}
                        {/*</Button>*/}
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(CardDishes);

