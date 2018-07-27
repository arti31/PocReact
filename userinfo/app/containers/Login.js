import React from 'react';
import LoginComponent from '../components/LoginComponent';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = () => {
        const { formData, history } = this.props;
        if (formData.userName === 'arti' && formData.password === 'arti12345') {
            history.push('/companyProfile');
        }else{
            alert('Incorrect Credentials');
        }
    }

    render() {
        return <LoginComponent handleSubmit={this.handleSubmit} />
    }
}

function mapStateToProps(state, props) {
    let stateValue = {
        formData: state.form.loginForm && state.form.loginForm.values
    }
    return stateValue
}

export default withRouter(connect(mapStateToProps)(Login));
