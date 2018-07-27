import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import FormField from './FormField';
import FormSubmit from './FormSubmit';

const WrappedForm = props => {
  const {
    handleSubmit,
    // pristine,
    // reset,
    // invalid,
    // submitting,
    children,
    // dirty,
    rest
  } = props;
  return (
    <form onSubmit={handleSubmit} {...rest}>
      {children}
    </form>
  );
};

class Form extends React.Component {
  componentWillMount() {
    const {
      children,
      name,
      initialValues,
      // validate,
      onSubmit,
      fields,
      ...rest
    } = this.props;

    this.ReduxFormWrapper = reduxForm({
      form: name,
      initialValues,
      onSubmit,
      fields,
      children,
      rest,
      touchOnChange: true
    })(WrappedForm);
  }

  render() {
    return <this.ReduxFormWrapper>{this.props.children}</this.ReduxFormWrapper>;
  }
}

Form.defaultProps = {
  children: null,
  initialValues: {},
  // validate: {},
  fields: []
};

Form.propTypes = {
  children: PropTypes.node,
  initialValues: PropTypes.shape({}),
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  // validate: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.string)
};

Form.Field = FormField;
Form.Submit = FormSubmit;


export default Form;
