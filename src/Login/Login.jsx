import React from 'react';
import {Form, Button, Card,  } from 'react-bootstrap';
import {useRef} from 'react';
import { useAuth} from '../AuthContext/AuthContextFC';
import { useNavigate } from "react-router-dom"



function Login(props) {

    let navigate = useNavigate();

    const passwordRef = useRef();
    const emailRef = useRef();

 
    const {login} = useAuth();

    let handleLogin = async (e) => {
        e.preventDefault();
      
            console.log(emailRef, passwordRef);

            try {
                await login(emailRef.current.value, passwordRef.current.value);
                    navigate('/account');
            } catch {
                    navigate('/');
            }
    }

    return (
        <div  className="w-50">   
            <Card >
                <Card.Body>
                    <p className="text-center">AUTHORIZASTION</p>
                    <h2 className="text-center">Login</h2>
                    {/* {error && <Alert>You got an error</Alert>} */}
                    <Form onSubmit={handleLogin}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label> 
                                 <Form.Control  ref={emailRef}></Form.Control>


                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef}></Form.Control>

                        </Form.Group>

                        <Button onClick={(e) => handleLogin(e)}   className="w-100" >Login</Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    );
}

export default Login;