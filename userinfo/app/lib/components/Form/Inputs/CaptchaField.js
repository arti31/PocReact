import React from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

import { recaptchaKey } from '../../../../config';

const propTypes = {
  // id: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string
  }),
  id: PropTypes.string,
  input: PropTypes.object.isRequired
};

const CaptchaField = ({ id, input, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <ReCAPTCHA
      id={id}
      sitekey={recaptchaKey}
      onChange={response => input.onChange(response)}
    />
    {touched &&
      ((error && <span className="error">{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
);

CaptchaField.propTypes = propTypes;

export default CaptchaField;
