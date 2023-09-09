import { Outlet } from "react-router-dom";
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import{ ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
    
    <Header />
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss={false}
    draggable
    pauseOnHover={false}
    theme="light"
    />
    <Container className="my-2">
      <Outlet/>
    </Container>
   
    
    </>
  )
}

export default App;