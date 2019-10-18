import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Auth } from "aws-amplify";

const SignUp = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(props.status) {
            setUsers([...users, props.status])
        }
    }, [props.status])
    return (
        <div className="sign-up-form">
            <Form>
                <Field type="text" name="first" placeholder="FIRST NAME" />
                <Field type="text" name="last" placeholder="LAST NAME" />
                <Field type="text" name="email" placeholder="EMAIL" />
                <Field type="text" name="password" placeholder="PASSWORD" />
                <Field type="text" name="confirm" placeholder="CONFIRM PASSWORD" />
                <p>Already have an account? <Link to= {`/login`} >Log in now!</Link></p>
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
        confirm: props.confirm || ''
    }
    return newObj;
};



const mySubmit = async (e) => {
    e.preventDefault();

    try {
        const newUser = await.
    }
};

const yupSchema = Yup.object().shape({
    first: Yup.string().required("Name is required"),
    last: Yup.string().required("Name is required"),
    email: Yup.string().email("Please enter a valid email").required("Email is required"),
    password: Yup.string().min(8, 'Password must be 8 characters or longer').required('Password is required'),
    confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    
});

const formikObj = {
    mapPropsToValues: myMapProps,
    handleSubmit: mySubmit,
    validationSchema: yupSchema
};

const NewSignUp = withFormik(formikObj);

const NewSignUpForm = NewSignUp(SignUp);

export default NewSignUpForm;