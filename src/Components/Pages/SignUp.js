import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import { Button } from '../Button'
import './SignUp.css'
import { useHistory} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";






export default function SignUp(){

    let history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')


    function Authenticate(){
    const Auth = getAuth();
  
    createUserWithEmailAndPassword(Auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user created')
    history.push('/dashboard')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    document.querySelector('.error').innerHTML = errorCode
    // ..
  });
     
      
      }    

      
      

    return (
        
        <>
    <div className='sign-up'>
    <h4>SIGN UP</h4>
    <div><p className='error'></p></div>
    <form className='signup-form'>
    <input type='email' placeholder='Your Email ' className='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />
    <input type='username' placeholder='Your Username' className='username' value={username} onChange={e => setUsername(e.target.value)}/>
    <input type='password' placeholder='Your Password' className='password' id='password' value={password} onChange={e => setPassword(e.target.value)} />
    <p>Already have an account?</p>
    <Link to='/Login'>
    <p className='login'>Login</p>
    </Link>
    <Button className='btns' buttonStyle='btn--outline' type='submit' onClick={Authenticate}>SIgn Up</Button>
    </form>
    </div>

        </>
    )
}