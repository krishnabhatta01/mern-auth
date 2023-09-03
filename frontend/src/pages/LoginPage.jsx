import {Button, Form, Row, Col} from 'react-bootstrap';
import FormContainer  from '../components/FormContainer';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const LoginPage = () => {  
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('submit');
    }
    
    return (
    <FormContainer>
        <h2 className="mb-8 text-center text-2xl font-bold  tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
            {`We'll never share your email with anyone else.`} 
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group>
       
        <Button variant="primary" type="submit">
            Submit
        </Button>
        <Row className="mt-3">
            <Col>
                {`New Customer?`} <Link to="/register">{`Register`}</Link>
            </Col>
        </Row>
        </Form>

    </FormContainer>

  )
}
export default LoginPage;