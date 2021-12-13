import './App.css';
import SignUp from './SignUpFC/SignUp';
import {Container} from 'react-bootstrap';
import AuthProviderFC from './AuthContext/AuthContextFC';
import {BrowserRouter  , Routes, Route} from 'react-router-dom';
import DashBoard from './Dashboard/DashBoard';
import Login from './Login/Login';
import UserAccount from './UserAccount/UserAccount';

function App() {
  return (
  
      <Container className="  d-flex align-items-center
    justify-content-center">   

        <BrowserRouter>
            <AuthProviderFC>
                <Routes>
                  <Route exact path="/" element={<DashBoard />} /><Route/>
                  <Route  path="/sign" element={<SignUp />} /><Route/>
                  <Route  path="/login" element={<Login />} /><Route/>
                  <Route  path="/account" element={<UserAccount />} /><Route/>

                </Routes>
            </AuthProviderFC>
        </BrowserRouter>     
        
      </Container>
  
  );
}

export default App;
