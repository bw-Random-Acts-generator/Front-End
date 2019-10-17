import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';

const SignUp = (props) => {
    return (
        <div className="sign-up-form">
            <Form>
                <Field type='text' name='first' placeholder='First Name' />
            </Form>
        </div>
    )
}

export default SignUp;