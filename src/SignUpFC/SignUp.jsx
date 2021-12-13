import React,{useRef, useState}  from 'react';
import {Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../AuthContext/AuthContextFC';

const SignUp = () => {

    let emailRef = useRef();
    let passwordRef = useRef();
    let passwordConfirmRef = useRef();
    const [error, setError] = useState(false)
    const {signup} = useAuth();
    const [loading, setLoading] = useState(false);


    let handleSubmit = async (e) => {
       e.preventDefault();

        if (passwordRef.current.value === passwordConfirmRef.current.value) {
            setLoading(true)
            try {
                console.log(passwordConfirmRef.current.value, passwordRef.current.value)
               await signup(emailRef.current.value, passwordRef.current.value);
                emailRef.current.value = '';
                passwordConfirmRef.current.value = '';
                passwordRef.current.value = '';
                
            } catch {
                setError(true);
                console.log(error);
            }   
        } else {
            alert("You entered wrong passwords");
            emailRef.current.value = '';
            passwordConfirmRef.current.value = '';
            passwordRef.current.value = '';

        }

        setLoading(false)

    }
     
    return (
        <div  className="w-50">   
            <Card >
                <Card.Body>
                    <p className="text-center">AUTHORIZASTION</p>
                    <h2 className="text-center">Sign up</h2>
                    {error && <Alert>You got an error</Alert>}
                    <Form onSubmit= {handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control  ref={emailRef}></Form.Control>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control ref={passwordConfirmRef}></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} onClick={(e) => handleSubmit(e)} className="w-100" type="submit">Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    );
};

export default SignUp;