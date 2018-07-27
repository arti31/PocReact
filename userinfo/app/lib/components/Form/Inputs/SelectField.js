import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({
  id,
  input,
  label,
  type,
  meta: { touched, error, warning },
  options
}) => {
  const renderOption =
    options.length &&
    options.map(obj => {
      return (
        <option key={`selectOption${obj.value}`} value={obj.value}>
          {obj.label}
        </option>
      );
    });

  const isError = touched && error;
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        id={id}
        className={`form-control${isError ? ' error' : ''}`}
        type={type}
        {...input}
      >
        {renderOption}
      </select>
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};

SelectField.defaultProps = {
  // help: '',
  label: '',
  options: []
};

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string
  }),
  input: PropTypes.any
  // help: PropTypes.string,
};

export default SelectField;
