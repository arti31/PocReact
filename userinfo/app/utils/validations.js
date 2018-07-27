import { simpleUrl as urlRegex, password } from '../utils/regexs'

export const required = value => value ? undefined : 'This field cannot be left blank'

export const requiredAndTrimmed = (value) =>  {
  return (value && !(/^\s+$/.test(value)) ? undefined : 'This field cannot be left blank')
}

export const maxLength = max => value => {
  return value && value.length > max ? `Must be ${max} characters or less` : undefined
}

export const minLength = min => value => {
  return value && value.length < min ? `Must be ${min} characters or more` : undefined
}

export const maxLength15 = maxLength(15)

export const toUpper = value => value && value.toUpperCase();

export const validateSimpleUrl = value => urlRegex.test(value) ? undefined : 'Not a valid URL'

export const number = value => {
  return value && isNaN(Number(value)) ? 'Must be a number' : undefined
}

export const minValue = min => value => {
  return value && value < min ? `Must be at least ${min}` : undefined
}

export const minValue18 = minValue(18)

export const pincodeRegex = value =>  value && /^[1-9][0-9]{5}$/.test(value) ?
   undefined : 'Invalid Pincode'

export const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined

export const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

export const pancardNumberRegex = value =>  value && /[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(value) ?
 undefined : 'PAN Number is invalid'
                                                  
export const dateFormatRegex = value =>  value && /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](18|19|20)\d\d$/.test(value) ?
 undefined : 'Please enter valid Date in DD/MM/YYYY Format'

export const websiteUrlRegex = value =>  !value || /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(value) ?
 undefined : 'Entered website URL is invalid'

export const nameRegex = value =>  value && /^[a-zA-Z\s]*$/.test(value) ?
 undefined : 'Name should contain only alphabets'

export const merchantNameRegex = value => value && /^(?!\s*$)[a-zA-Z .]{1,80}$/.test(value) ?
 undefined : 'Name should contain alphabets only (a-z)'

export const bankAccountRegex = value =>  value && /^[A-Za-z0-9]+$/.test(value) ?
   undefined : 'Bank number should not contain special caracters e.g.(.#$,)'

    export const amountRegx = value => value && /^\d{0,8}(\.\d{1,2})?$/.test(value) ?
    undefined : 'Invalid amount'

export const checkFeatureDate = value => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10) {
    dd='0'+dd
  } 
  if(mm<10) {
      mm='0'+mm
  } 
  today = dd+'/'+mm+'/'+yyyy;

  var todayDate = today.split("/");
  var currentEnteredDate = value;
  if (currentEnteredDate != null) { 
  	var dateFormat = currentEnteredDate.split("/");
  	if (dateFormat[2] > todayDate[2]) {
   return "please enter a date less than today"
  }
  if (dateFormat[2] == todayDate[2]) {
  	if (dateFormat[1] > todayDate[1]) {
  		return "please enter a date less than today" 
  	}if (dateFormat[1] == todayDate[1]) {
  		if (dateFormat[0] > todayDate[0]) {
  			return "please enter a date less than today"
  		};
  	};
  };
  };
}


export const checkEmailOrPhone = value => {
  var email = /^(?=.{6,254}$)[A-Za-z0-9_\-\.]{1,64}\@[A-Za-z0-9_\-\.]+\.[A-Za-z]{2,}$/.test(value);
  var phone = /^[6789]\d{9}$/.test(value);
  if(!email && !phone){
    return "Please enter valid mobile number/ email "
  }
}

export const amountRegex = value =>  value && /^[0-9]\d*(\.\d+)?$/.test(value) ?
  undefined : 'Invalid amount'

export const emailRegex = value =>  value && /^(?=.{6,254}$)[A-Za-z0-9_\-\.]{1,64}\@[A-Za-z0-9_\-\.]+\.[A-Za-z]{2,}$/.test(value) ?
  undefined : 'Invalid email'

export const phoneNumberRegex = value =>  value && /^[6789]\d{9}$/.test(value) ?
  undefined : 'Invalid mobile number'

export const nonZeroAmountRegex = value => value && /^[1-9]\d*(\.\d+)?$/.test(value) || /^0.\d*[1-9]+\d*$/.test(value) ?
    undefined : 'Amount can only contain digits(0-9)'

export const onlyNumber = (value)=>{
  let result;
  if(!value) return undefined;
  result = (/^(\d)*$/.test(value)) ? undefined : 'Please enter only number12'
  return result;
}

export const gstRegex = value =>  value && /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[A-Z]{1}[0-9A-Z]{1}/.test(value) ?
    undefined : 'Please enter valid Gst Number'

export const ifscCodeRegex = value =>  value && /^[A-Za-z]{4}\d{7}$/.test(value) ?
    undefined : 'IFSC code format is invalid'

export const nameAlphaNumRegex = value =>  value && /^[A-Za-z0-9 ]+$/.test(value) ?
 undefined : 'Name should not contain special characters e.g.(.#$,)'

export const alphaNumRegexWithOneChar = value =>  value && /^[A-Za-z0-9][A-Za-z0-9 .,;:'°&/()-]*$/.test(value) ?
 undefined : 'Please enter valid Address'

export const validateBtnRedirectUrl = value => !value || /^(http|https):\/\//.test(value) ? undefined : 'Please use http:// or https://'

export const singleDigitRegex = /^(?:[1-9]|0[1-9]|10)$/;

export const isStrongPassword = value => new RegExp(password).test(value);

export const hasMinChars = (value, minLimit) => new RegExp(`(?=.{${minLimit},})`).test(value);

export const hasUpperChar = value => /^(?=.*[A-Z])/.test(value);

export const hasLowerChar = value => /^(?=.*[a-z])/.test(value);

export const hasNumber = value => /^(?=.*[0-9])/.test(value);
