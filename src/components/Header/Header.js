import { AppBar, Container, makeStyles, Typography, Toolbar, Button } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    signUp: {
        marginRight: theme.spacing(2)
    }
}))



const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>Todo List</Typography>
                        <Button className={classes.signUp} variant="outlined" color="inherit">Sign In</Button>
                        <Button color="secondary">Sign Up</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}


export default Header;
