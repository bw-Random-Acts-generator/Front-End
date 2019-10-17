import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';

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

export default SignUp;