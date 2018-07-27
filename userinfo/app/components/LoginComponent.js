var React = require('react');
import Form from '../lib/components/Form';
import { Field } from 'redux-form';
import { defaultOnboardingFieldComponent } from '../shared/form/fieldRenderComponents'
import {required,minLength,maxLength,nameAlphaNumRegex} from '../utils/validations'
import { FormSubmit } from '../lib/components/Form/FormSubmit';
import  FormField  from '../lib/components/Form/FormField';


const LoginComponent = (props) => {
    return (
        <Form name="loginForm" onSubmit={props.handleSubmit}>
            <FormField type="text"
                name="userName"
                class="form-control"
                label = "UserName"
                placeholder="Enter Username"
                component={defaultOnboardingFieldComponent}
                validate={[required, nameAlphaNumRegex]}
                >
            </FormField>
            <FormField type="password"
                class="text-field"
                name="password"
                label = "Password"
                maxlength="18"
                component={defaultOnboardingFieldComponent}
                placeholder="Enter Password"
                validate={[required, minLength(9), maxLength(18)]}
            >
            </FormField>
            <FormSubmit label = "Submit" formName = "loginForm"/>
        </Form>
    )
}


export default LoginComponent;