import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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

const myMapProps = props => {
    console.log(props);
    const newObj = {
        first: props.first || '',
        last: props.last || '',
        email: props.email || '',
        password: props.password || '',
    }
    return newObj;
};



const mySubmit = (values, { setStatus }) => {
    axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
            console.log(res);
            setStatus(res.data);
        })
        .catch(err => console.log(err));
};

const yupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Please enter a valid email").required("Email is required"),
    password: Yup.string().min(8, 'Password must be 8 characters or longer').required('Password is required'),
    terms: Yup.boolean().required('Must check TOS'),
});

const formikObj = {
    mapPropsToValues: myMapProps,
    handleSubmit: mySubmit,
    validationSchema: yupSchema
};

const NewSignUp = withFormik(formikObj);

const NewSignUpForm = NewSignUp(SignUp);

export default NewSignUpForm;