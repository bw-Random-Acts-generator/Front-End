import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';



const SignUp = (props) => {
    const [users, setUsers] = useState([]);

    //styles
    const containerStyle= {
        backgroundColor: '#F2CFC9',
        display: 'flex',
        border: '1px solid black',
        width: '100%',
        height: '60rem'
    }

    const headerStyle = {
        marginTop: '8%',
        color: '#918C89'
    }
    const testimonialStyle = {
        width: '50%'
    }
    const formStyle = {
        marginTop: '15%',
        backgroundColor: 'white',
        border: '1px solid #918C89',
        display: 'flex',
        flexDirection: 'column',
        width: '150%',
        height: '52rem',
        fontSize: '1.5rem'
    }

    const fieldStyle = {
        color: '#918C89',
        width: '85%',
        margin: '3.5%',
        padding: '2.5%',
        fontSize: '1.5rem'
    }

    const buttonConStyle = {
        display: 'flex',
        justifyContent: 'space-between'
    }
    const loginReminder = {
        color: '#918C89',
        width: '60%',
        textDecoration: 'none',
        marginLeft: '3%'
    }
    const buttonStyle = {
        backgroundColor: 'white',
        fontSize: '1.5rem',
        color: '#918C89',
        width: '17.5%',
        border: '1px solid #918C89',
        marginRight: '6%',
        height: '75%'
    }

    //useeffect to setuser to what the form is filled out as
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
                    <p style={headerStyle}>Create Account</p>
                    <Field type="text" name="first" placeholder="FIRST NAME" style={fieldStyle}/>
                    
                    <Field type="text" name="last" placeholder="LAST NAME" style={fieldStyle}/>
                    
                    <Field type="text" name="username" placeholder="EMAIL" style={fieldStyle}/>
                    
                    <Field type="text" name="password" placeholder="PASSWORD" style={fieldStyle}/>
                    
                    <Field type="text" name="confirm" placeholder="CONFIRM PASSWORD" style={fieldStyle} />
                    
                    <div style={buttonConStyle}>
                        <p style={loginReminder}>Already have an account? <Link to= {`/login`} style={loginReminder}>Log in now!</Link></p>
                        <button type="submit" style={buttonStyle}>Sign Up</button>
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