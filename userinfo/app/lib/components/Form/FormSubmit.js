import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { getStateValues } from '../../../selectors';

export const FormSubmit = ({ formName, label, isLoading, className }) => (
  <div>
      <button
        id={`form-submit-${formName}`}
        type="submit"
        className={`btn btn-orange ${className}`}
      >
        {label}
      </button>
  </div>
);

FormSubmit.propTypes = {
  label: PropTypes.string.isRequired
};

export default connect()(FormSubmit);
