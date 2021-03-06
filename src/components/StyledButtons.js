import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg,darkgrey,blue)",
        border: 0,
        borderRadius: "15px",
        color: "white",
        padding: "10px 30px",
    }
})

export default function StyledButtons() {
    const classes = useStyles();
    return (
        <Button className={classes.root}>Styled Button</Button>
    )
}