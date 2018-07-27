import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  id,
  input,
  label,
  placeholder,
  type,
  autoFocus,
  tooltip,
  meta: { touched, error, warning }
}) => {
  const isError = touched && error;
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={id}>
          {label}
          {tooltip ? (
            <span className="pull-right" data-toggle="tooltip" title={tooltip}>
              <i className="fa fa-question-circle-o" />
            </span>
          ) : null}
        </label>
      )}

      <input
        className={`form-control${isError ? ' error' : ''}`}
        id={id}
        placeholder={placeholder}
        type={type}
        autoFocus={autoFocus}
        {...input}
      />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};

InputField.defaultProps = {
  // help: '',
  label: ''
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  autoFocus: PropTypes.any,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string
  }),
  input: PropTypes.any
  // help: PropTypes.string,
};

export default InputField;
