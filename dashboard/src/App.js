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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
