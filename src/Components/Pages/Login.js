import React, { useState} from 'react'
import '../../App.css'
import { Button } from '../Button'
import './SignUp.css'
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { useHistory} from 'react-router-dom'

export default function Login(){

    let history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function SignIn(){

        const Auth = getAuth();
      
        signInWithEmailAndPassword (Auth, email, password)
      .then((userCredential) => {
       // Signed in 
        const user = userCredential.user;
        console.log('signed in')
        history.push('/dashboard')
        // ...
       // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        document.querySelector('.error').innerText = errorCode
        // ..
      });
           
          
          }    



    return (
        <>
    
    <div className='sign-up'>
    <h4>LOGIN</h4>
    <div><p className='error'></p></div>
    <form className='signup-form'>
    <input type='email' placeholder='Your Email' value={email} onChange={e => setEmail(e.target.value)} />
    <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} /> 
        <Button className='btns' buttonStyle='btn--outline' onClick={SignIn}>Login</Button>   
    </form>
    </div>

        </>
    )
}