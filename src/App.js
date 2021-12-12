import './App.css';
import SignUp from './SignUpFC/SignUp';
import {Container} from 'react-bootstrap';
import AuthProviderFC from './AuthContext/AuthContextFC';


function App() {
  return (
   <AuthProviderFC>
      <Container className="  d-flex align-items-center
    justify-content-center">        
        <SignUp />
      </Container>
   </AuthProviderFC>
  );
}

export default App;
