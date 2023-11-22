import * as yup from 'yup'

export const registerFormSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required')
})

export const loginFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
})