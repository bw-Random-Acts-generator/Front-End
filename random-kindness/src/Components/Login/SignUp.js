import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';



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
                {props.touched.first && props.errors.first && 
                    <p className='error'>{props.errors.first}</p>
                }
                <Field type="text" name="last" placeholder="LAST NAME" />
                {props.touched.last && props.errors.last && 
                    <p className='error'>{props.errors.last}</p>
                }
                <Field type="text" name="email" placeholder="EMAIL" />
                {props.touched.email && props.errors.email && 
                    <p className='error'>{props.errors.email}</p>
                }
                <Field type="text" name="password" placeholder="PASSWORD" />
                {props.touched.password && props.errors.password && 
                    <p className='error'>{props.errors.password}</p>
                }
                <Field type="text" name="confirm" placeholder="CONFIRM PASSWORD" />
                {props.touched.confirm && props.errors.confirm && 
                    <p className='error'>{props.errors.confirm}</p>
                }
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



const mySubmit = (values, { setStatus }) => {
    axios
        .post(`https://random-acts0519.herokuapp.com/api/register`, values)
        .then(res => {
            console.log(res);
            setStatus(res.data);
        })
        .catch(err => console.log(err));
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