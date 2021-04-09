import React from 'react';
import CoffeeCard from './CoffeeCard';
import Grid from '@material-ui/core/Grid';

const Content = () => {
    return (
        <Grid container spacing={4}>
        <Grid item xs={8} sm={4}>
        <CoffeeCard/>
        </Grid>
        <Grid item xs={8} sm={4}>
        <CoffeeCard/>
        </Grid>
        <Grid item xs={8} sm={4}>
        <CoffeeCard/>
        </Grid>
        <Grid item xs={8} sm={4}>
        <CoffeeCard/>
        </Grid>
        <Grid item xs={8} sm={4}>
        <CoffeeCard/>
        </Grid>
        <Grid item xs={8} sm={4}>
        <CoffeeCard/>
        </Grid>
        </Grid>
    )
}

export default Content
