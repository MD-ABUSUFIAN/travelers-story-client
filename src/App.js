
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Home/Banner/Banner';
import Footer from './Components/Home/Footer/Footer';
import Home from './Components/Home/Home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AddTravelExperience from './Components/Home/AddTravelExprience/AddTravelExperience';
import Contact from './Components/Home/Contact/Contact';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import BlogDetails from './Components/Home/BlogsDetails/BlogDetails';
import Blogs from './Components/Home/Blogs/Blogs';
import NewBlogs from '../src/Components/Admin/NewBlogs/NewBlogs'
import AllBlogs from './Components/Admin/AllBlogs/AlllBlogs';
import ManageBlogs from './Components/Admin/ManageBlogs/ManageBlogs';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
<>

<AuthProvider>
<BrowserRouter>
       
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>      
            <Route path="/addExpreience" element={<AddTravelExperience/>}/>      
            <Route path="/contact" element={<Contact/>}/>      
            <Route path="/login" element={<Login/>}/>      
            <Route path="/register" element={<Register/>}/>      
            <Route path="/admin" element={<PrivateRoute><AdminDashboard/></PrivateRoute>}/>      
            <Route path="/blogs" element={<Blogs/>}/>      
            <Route path="/blog/:detailsId" element={<PrivateRoute><BlogDetails/></PrivateRoute>}/>      
            <Route path="/admin/newBlog" element={<PrivateRoute><NewBlogs/></PrivateRoute>}/>      
            <Route path="/admin/allBlogs" element={<PrivateRoute><AllBlogs/></PrivateRoute>}/>      
            <Route path="/admin/manageBlogs" element={<PrivateRoute><ManageBlogs/></PrivateRoute>}/>      
          </Routes>
        <Footer/>
     </BrowserRouter>

</AuthProvider>

  
</>
  );
}

export default App;
