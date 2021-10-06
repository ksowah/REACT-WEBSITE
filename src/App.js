import React from 'react'
import './App.css';
import Navbar from './Components/Navbar.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Services from './Components/Pages/Services'
import Products from './Components/Pages/Products'
import SignUp from './Components/Pages/SignUp'
import Login from './Components/Pages/Login'
import Dashboard from './Components/Pages/Dashboard'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDe9EILeLEx8udK1sgkd1CdnzOFSdCsqw",
  authDomain: "travel-412f8.firebaseapp.com",
  databaseURL: "https://travel-412f8-default-rtdb.firebaseio.com",
  projectId: "travel-412f8",
  storageBucket: "travel-412f8.appspot.com",
  messagingSenderId: "420290345678",
  appId: "1:420290345678:web:b9b079005f612cda766e9f"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


function App() {

  return (
    <>
      <Router>
         <Navbar />  
         <Switch>
           <Route path='/' exact component={Home}/>
           <Route  path='/services' component={Services} />
           <Route  path='/products' component={Products} />
           <Route  path='/sign-up' component={SignUp} />
           <Route  path='/login' component={Login} />
           <Route  path='/dashboard' component={Dashboard} />
         </Switch>
      </Router>
    </>
  );
}
    
export default App;
