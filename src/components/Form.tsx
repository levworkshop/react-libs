import { useFormik } from "formik";
import Joi from "joi";

interface IError {
    [key: string]: string;
}

function Form() {
    const formik = useFormik({
        // default values of fields
        initialValues: {
            firstName: '',
            lastName: '',
            city: 'Tel-Aviv'
        },

        validate: values => {
            const errors: IError = {};

            // --- 1. Example for simle rule validation ---
            // if (values.firstName.length < 3) {
            //     errors.firstName = "first name is too short";
            // }

            // if (values.lastName.length < 3) {
            //     errors.lastName = "error: last name";
            // }


            // --- 2. Example for Joi validation ---
            const schema = Joi.object().keys({
                firstName: Joi.string().required().min(3),
                lastName: Joi.string().required().min(3),
            });

            const { error } = schema.validate(values);

            if (error) {
                error.details.forEach(item => {
                    if (item.context) {
                        const key = item.context.key + '';
                        errors[key] = item.message;
                    }
                })
            }

            return errors;
        },

        onSubmit: values => {
            // do something on submit
            console.log(values);

            formik.resetForm();
        }
    });

    return (
        <div>
            <form
                onSubmit={formik.handleSubmit}
            >
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.firstName && formik.errors.firstName ? (
                            <div>{formik.errors.firstName}</div>
                        ) : null
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.touched.lastName && formik.errors.lastName ? (
                            <div>{formik.errors.lastName}</div>
                        ) : null
                    }
                </div>
                <div>
                    <label>City</label>
                    <select
                        name="city"
                        id="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                    >
                        <option value="Tel-Aviv">Tel-Aviv</option>
                        <option value="Haifa">Haifa</option>
                    </select>
                </div>

                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;