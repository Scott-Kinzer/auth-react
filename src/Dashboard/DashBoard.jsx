import React from 'react';
import { NavLink } from 'react-router-dom'
import {Button, Card } from 'react-bootstrap';

function DashBoard(props) {
    return (
        <div className="dashboard-wrapper">
        <Card>
            <h2>WELCOME</h2>
             <Card.Body>
           
                <Button className="login-btn">
                <NavLink  className="nav" to="/login" >LOGIN</NavLink>
                </Button>
                <Button>
                <NavLink className="nav" to="/sign" >SIGN UP</NavLink>
                </Button>
           
            </Card.Body>
        </Card>
        </div>
    );
}

export default DashBoard;