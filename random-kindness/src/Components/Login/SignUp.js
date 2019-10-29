import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './signup.css';

var woman = require('../../img/woman.jpeg');


const SignUp = (props) => {
    const [users, setUsers] = useState([]);

    //styles
    

    //useeffect to setuser to what the form is filled out as
    useEffect(() => {
        if(props.status) {
            setUsers([...users, props.status])
            props.history.push('/signup-confirm');
        }
    }, [props.status])
    // console.log(props.touched);
    // console.log(props.errors);
    props.callBack('#F2CFC9');
    console.log(props.callBack)
    return (
        <div  className="Container">
            <div className='testimonial' >
                <div  className="pic-con">
                    <img src={woman}  className="woman-pic" alt="Smiling Woman"/>
                </div>
                <p  className="test-text">"Random Acts Generator helped remind me that my children are watching everything I do and it doesn't cost anything to be kind!"</p>
                <div>
                    <p  className="from-style">Beth Ann</p>
                    <p  className="from-style">New York</p>
                </div>
            </div>
            <div className="sign-up-form" >
                <Form  className="form-style">
                    <p  className="header">Create Account</p>
                    <Field className="field-text" type="text" name="first" placeholder="FIRST NAME" />
                    
                    <Field className="field-text" type="text" name="last" placeholder="LAST NAME" />
                    
                    <Field className="field-text" type="text" name="username" placeholder="EMAIL" />
                    
                    <Field className="field-text" type="password" name="password" placeholder="PASSWORD" />
                    
                    <Field className="field-text" type="password" name="confirm" placeholder="CONFIRM PASSWORD"  />
                    
                    <div  className="button-con">
                        <p  className="reminder">Already have an account? <Link to= {`/login`} >Log in now!</Link></p>
                        <button className="button" type="submit" >Sign Up</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

const myMapProps = props => {
    console.log(props);
    const newObj = {
        first: props.first || '',
        last: props.last || '',
        username: props.username || '',
        password: props.password || '',
        confirm: props.confirm || ''
    }
    return newObj;
};



const mySubmit = (values, { setStatus }) => {
    console.log(values);
    const newVal = {
        username: values.username,
        password: values.password,
        name: values.first + ' ' + values.last
    }
    axios
        .post(`https://random-acts0519.herokuapp.com/api/register`, newVal)
        .then(res => {
            console.log(res);
            setStatus(res.data);
        })
        .catch(err => console.log(err));
};

const yupSchema = Yup.object().shape({
    first: Yup.string().required("Name is required"),
    last: Yup.string().required("Name is required"),
    username: Yup.string().email("Please enter a valid email").required("Email is required"),
    password: Yup.string().min(8, 'Password must be 8 characters or longer').required('Password is required'),
});

const formikObj = {
    mapPropsToValues: myMapProps,
    handleSubmit: mySubmit,
    validationSchema: yupSchema
};

const NewSignUp = withFormik(formikObj);

const NewSignUpForm = NewSignUp(SignUp);

export default NewSignUpForm;