import * as yup from 'yup';

const formSchema = yup.object()
.shape({
    username: yup
    .string()
    .trim()
    .required('You need a Username you bozo!')
    .min(3, 'usermane is too short homie'),
    email: yup
    .string()
    .email('your email is invalid')
    .required('you need email to sign up'),
    password: yup
    .string()
    .required('you need a password ugly')
    .min(6, 'password is too short '),
    tos: yup
    .boolean()
    .oneOf([true], 'we know youre not gonna read it, just check the box')
})

export default formSchema;