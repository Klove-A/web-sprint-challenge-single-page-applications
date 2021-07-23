import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Name is required")
        .min("name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(["XS", "S", "M", "L", "XL"], "size is required"),
})

export default formSchema