export const name = '^(?!\s*$)[a-zA-Z .]{1,80}$';
export const email = '^([A-Za-z0-9_\\-\\.]){1,64}\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,})$'
/*export const password = {
  isArray: true,
  pattern: ['^.{6,}$', '[A-z]', '\d']
}*/
export const password = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})'
export const username = '^(([A-Za-z0-9_\\-\\.])+\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,}))|(\\d{10})$'
export const phone = '^[6-9][0-9]{9}$'
export const simpleUrl = /^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/
export const matchLineBreaks = /(\r\n|\n|\r)/gm
