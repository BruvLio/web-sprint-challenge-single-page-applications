import * as yup from 'yup';



const formSchema = yup.object().shape({
    name: yup
        .string()
        .required()
        .min(2, 'Name should be more than 2 characters')
})

export default formSchema;