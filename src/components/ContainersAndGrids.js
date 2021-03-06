import React from 'react';
import { Container, Paper, Grid } from '@material-ui/core'

export default function ContainersAndGrids() {
    return (
        <Container maxWidth="md">
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: "#333" }}>
                <h2>Containers and Grids</h2>
            </div>
            <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                    <Paper style={{ height: 175, width: '100%', backgroundColor: "grey" }} />
                </Grid>
                <Grid item xs>
                    <Paper style={{ height: 175, width: '100%', backgroundColor: "grey" }} />
                </Grid>
                <Grid item xs>
                    <Paper style={{ height: 175, width: '100%', backgroundColor: "grey" }} />
                </Grid>
                <Grid item xs>
                    <Paper style={{ height: 175, width: '100%', backgroundColor: "grey" }} />
                </Grid>
            </Grid>
        </Container >
    )
}