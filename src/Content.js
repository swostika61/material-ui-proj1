import React from 'react';
import CoffeeCard from './CoffeeCard';
import Grid from '@material-ui/core/Grid';
import CoffeeMakerList from './Constants';

const Content = () => {
    const getCoffeeMakerCard = coffeeMakerObj => {
        return (
            <Grid item xs={12} sm={4}>
                <CoffeeCard {...coffeeMakerObj} />
            </Grid>
        )

    }
    return (
        <Grid container spacing={4}>
            {CoffeeMakerList.map(coffeeMakerObj => getCoffeeMakerCard(coffeeMakerObj))}
        </Grid>
    )
}

export default Content
