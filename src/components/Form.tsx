import { useFormik } from "formik";

function Form() {
    const formik = useFormik({
        // default values of fields
        initialValues: {
            firstName: '',
            lastName: ''
        },

        onSubmit: values => {
            // do something on submit...
            console.log(values);
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
                    />
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