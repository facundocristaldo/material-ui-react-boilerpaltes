import React from 'react';
import { AppBar, ToolBar, IconButton, Toolbar, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

export default function NavBar() {
    return (
        <AppBar color={'secondary'}>
            <Toolbar>
                <IconButton>
                    <MenuIcon></MenuIcon>
                </IconButton>
                <Typography variant="h6">MUI Themeing</Typography>
                <Button>Login</Button>
            </Toolbar>
        </AppBar>
    )
}