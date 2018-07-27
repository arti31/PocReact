import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const buildErrors = props => {
  const { error } = props;
  // do some processing if needed
  return error && <span className="error">{error}</span>;
};

const FormField = props => {
  const { shouldDisplayError } = props;
  const errorNode = buildErrors(props);

  return (
    <div className="field">
      <Field
        id={props.name}
        component={props.component}
        errorNode={errorNode}
        {...props}
      />
      {shouldDisplayError && errorNode}
    </div>
  );
};

FormField.defaultProps = {
  error: '',
  shouldDisplayError: true
};

FormField.propTypes = {
  component: PropTypes.func,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  shouldDisplayError: PropTypes.bool
};

export default FormField;
