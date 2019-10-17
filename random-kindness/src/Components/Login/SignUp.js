import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignUp = (props) => {
    return (
        <div className="sign-up-form">
            <Form>
                <Field type="text" name="first" placeholder="First Name" />
                <Field type="text" name="last" placeholder="Last Name" />
                <Field type="text" name="email" placeholder="Email" />
                <Field type="text" name="password" placeholder="********" />
                <Field type="text" name="confirm" placeholder="********" />
                <p>Already have an account? Log in now!</p>
                <button type="submit">Sign Up</button>
            </Form>
        </div>
    )
}


const formikObj = {
    mapPropsToValues: myMapProps,
    handleSubmit: mySubmit,
    validationSchema: yupSchema
};


const NewSignUp = withForMik(formikObj);

const NewSignUpForm = NewSignUp(SignUp);

export default NewSignUpForm;