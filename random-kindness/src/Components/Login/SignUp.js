import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';



const SignUp = (props) => {
    const [users, setUsers] = useState([]);
    const containerStyle= {
        backgroundColor: '#F2CFC9',
        display: 'flex',
        border: '1px solid black',
        width: '100%',
        height: '45rem'
    }
    const testimonialStyle = {
        width: '50%'
    }
    const formStyle = {
        backgroundColor: 'white',
        border: '1px solid #918C89',
        display: 'flex',
        flexDirection: 'column',
        width: '200%',
        height: '40rem'
    }

    const fieldStyle = {
        color: '#918C89',
        width: '90%',
        marginLeft: '3%',
        marginBottom: '3%',
        padding: '1.5%'
    }
    useEffect(() => {
        if(props.status) {
            setUsers([...users, props.status])
        }
    }, [props.status])
    // console.log(props.touched);
    // console.log(props.errors);
    return (
        <div style={containerStyle}>
            <div className='testimonial' style={testimonialStyle}>
                <img/>
                <p>[INSERT TESTIMONIAL HERE]</p>
            </div>
            <div className="sign-up-form" >
                <Form style={formStyle}>
                    <h2>Create Account</h2>
                    <Field type="text" name="first" placeholder="FIRST NAME" style={fieldStyle}/>
                    {props.touched.first && props.errors.first && 
                       <p className='error'>{props.errors.first}</p>
                    }
                    <Field type="text" name="last" placeholder="LAST NAME" style={fieldStyle}/>
                    {props.touched.last && props.errors.last && 
                        <p className='error'>{props.errors.last}</p>
                    }
                    <Field type="text" name="username" placeholder="EMAIL" style={fieldStyle}/>
                    {props.touched.username && props.errors.username && 
                        <p className='error'>{props.errors.username}</p>
                    }
                    <Field type="text" name="password" placeholder="PASSWORD" style={fieldStyle}/>
                    {props.touched.password && props.errors.password && 
                        <p className='error'>{props.errors.password}</p>
                    }
                    <Field type="text" name="confirm" placeholder="CONFIRM PASSWORD" style={fieldStyle} />
                    {props.touched.confirm && props.errors.confirm && 
                        <p className='error'>{props.errors.confirm}</p>
                    }
                    <p>Already have an account? <Link to= {`/login`} >Log in now!</Link></p>
                    <button type="submit">Sign Up</button>
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