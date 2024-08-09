import * as yup from 'yup'

export const schemaSignIn = yup.object({
    password: yup.string().required('Password field is required.').min(6, 'Password minimum 6 characters'),
    phoneNumber: yup
      .string()
      .max(10)
      .required('Phone number is required.')
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits.'),
  })

export const schemaSignUp = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  password: yup.string().required('Password field is required.').min(8, 'Password minimum 8 characters'),
  confirmed_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Confirm password does not match')
    .required('Confirm password is required').min(6, 'Confirm password minimum 6 characters'),
  mobile_phone: yup
    .string()
    .max(10)
    .required('Phone number is required.')
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits.'),
})

export const schemaChangePassword = yup.object({
  mobile_phone: yup
    .string()
    .max(10)
    .required('Phone number is required.')
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits.'),
  new_password: yup.string().required('New password field is required.').min(6, 'New password minimum 6 characters'),
  confirmed_password: yup
    .string()
    .oneOf([yup.ref('new_password')], 'Confirm password does not match')
    .required('Confirm password is required')
    .min(6, 'Confirm password minimum 6 characters')
    
})
