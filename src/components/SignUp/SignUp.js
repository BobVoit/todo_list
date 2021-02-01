import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSignUp, signUp } from '../../redux/userReducer';
import { Redirect } from 'react-router-dom';
import SignUpForm from './SignUpForm';


const SignUp = props => {
    const onSubmit = formData => {
        props.signUp(formData.login, formData.password, formData.password2);
    }

    if (props.isSignUp) {
        props.setSignUp(false);
        return <Redirect to="/login" />
    }

    return (
        <div>
            <SignUpForm onSubmit={onSubmit} />
        </div>
    )
}

SignUp.propTypes = {
    isLogin: PropTypes.bool,
    isSignUp: PropTypes.bool
}

const mapStateToProps = (state) => ({
    isLogin: state.user.isLogin,
    isSignUp: state.user.isSignUp
})

export default connect(mapStateToProps, {
    setSignUp, signUp
})(SignUp) 