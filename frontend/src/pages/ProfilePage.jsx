import {useState, useEffect} from 'react';
import {Button, Form } from 'react-bootstrap';
import FormContainer  from '../components/FormContainer';
import {Link, useNavigate} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import { setCredentials } from '../slices/authSlice';
import {toast} from 'react-toastify';
import Loader from '../components/Loader';
import {useUpdateMutation} from '../slices/usersApiSlice';

const ProfilePage = () => {  

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    

    const navigate = useNavigate();
    const dispatch = useDispatch();

     const {userInfo} = useSelector((state) => state.auth);

     const [update, {isLoading}] = useUpdateMutation();

    useEffect(() => {
        setName(userInfo.name);
        setEmail(userInfo.email);

    },[userInfo.name, userInfo.email]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword ){
            toast.error('Passwords do not match!');
        } else if(name=="" || email=="" ){
            toast.error('Please fill up the form!');
        }else if(password === ''){
            toast.error('Please enter password!');
        }else {
            try {
                const res = await update({name, email, password, confirmPassword}).unwrap();
                dispatch(setCredentials({...res}));
               toast.success('Submitted');
               navigate('/');
            } catch (err) {
                toast.error(err.data.message || err.error );
            }
        }
    }
    
    return (
    <FormContainer class="h-screen"> 
        <h2 className="mb-8 text-center text-2xl font-bold  tracking-tight text-gray-900">
          Update Profile
          </h2>
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="name">
            <Form.Label>User name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" 
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
           
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </Form.Group>
       
      

        <Button variant="primary" type="submit">
            Update
        </Button>

     

       
        </Form>

    </FormContainer>

  )
}
export default ProfilePage;