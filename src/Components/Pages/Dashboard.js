import React from 'react'
import '../dashboard.css'
import '../../App.css'
import { useHistory} from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";

function Dashboard(){

    let history = useHistory()

    function signout(){
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        history.push('/')
        }).catch((error) => {
        // An error happened.
});

    }

    return(
        <div className='dashboard--container'>
             <h2>WELCOME TO YOUR DASHBOARD</h2>
             <button className='sign--out' onClick={signout}>Sign Out</button>
        </div>
    )

}

export default Dashboard
