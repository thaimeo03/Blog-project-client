import * as yup from 'yup'

export const IRegisterFormSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required')
})

export const ILoginFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
})

export const IUpdateProfileSchema = yup.object({
  name: yup.string().min(3),
  address: yup.string().nullable(),
  birthday: yup.string().nullable()
})
