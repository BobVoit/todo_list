import { Container, CssBaseline, makeStyles, Avatar, Typography, Button, TextField } from '@material-ui/core';
import React from 'react';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { Field, reduxForm } from 'redux-form';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#000"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        paddingBottom: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#000',
        color: '#fff',
    },
    isSignUp: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    signUp: {
        margin: theme.spacing(2, 0, 2),
    }
}))

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={"form-controls" + " " + (hasError ? "form-controls__error" : "")}>
            <div>
                <TextField {...input} {...props} 
                margin="normal" required variant="outlined" 
                label={props.labelName} fullWidth />
            </div>
            { hasError && <span>{meta.error}</span> } 
        </div>
    )
}

const SignUpForm = props => {
    const classes = useStyles();
    return (
        <Container component="main" maxwidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccessibilityNewIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Sign Up</Typography>
                <form className={classes.form} onSubmit={props.handleSubmit}>
                    <Field 
                        autoFocus placeholder={"Login"} name={"login"} component={Input} />
                    <Field 
                        type={"Password"} placeholder={"password"} name={"password"} component={Input} />
                    <Field 
                        name={"nickname"} placeholder={"Nickname"} component={Input}/>    
                    <Button fullWidth className={classes.submit} type="submit" variant="contained">Sign Up</Button>
                </form>
            </div>
        </Container>
    )
}


export default reduxForm({
    form: "signup"
})(SignUpForm);