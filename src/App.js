import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './Pages/home/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import UserList from './Pages/userList/UserList';
import User from './Pages/user/User';
import NewUser from './Pages/newUser/NewUser';
import ProductList from './Pages/productList/ProductList';
import Product from './Pages/product/Product';
import NewProduct from './Pages/newProduct/NewProduct';

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/users" element={<UserList/>}/>
          <Route exact path="/user/:userId" element={<User/>}/>
          <Route exact path="/newUser" element={<NewUser/>}/>
          
          <Route exact path="/products" element={<ProductList/>}/>
          <Route exact path="/product/:productId" element={<Product/>}/>
          <Route exact path="/newProduct" element={<NewProduct/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
