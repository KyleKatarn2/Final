import { useState } from "react";
import { Link } from "react-router-dom";
import '../style/SignUp.css';

const SignUp = (props) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmedPassword] = useState('')

    let changePassword = (event) => {
        setPassword(event.target.value)
    }

    let changeConfirmedPassword = (event) => {
        setConfirmedPassword(event.target.value)
    }

    let validatePasswords = (event) => {
        event.preventDefault()
        if (password === confirmPassword){
            alert("Success")
            props.userAuthChanged()
        } else {
            alert("Password does not match")
        }
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={validatePasswords} className="sign-up">
                <label>Name</label>
                <input type= "text" />
                <label>Password</label>
                <input type= "password" onChange={changePassword} value={password} />
                <label>Confirm Password</label>
                <input type= "password" onChange={changeConfirmedPassword} value={confirmPassword} />
                <input type= "submit" />
            </form>

            <div>
                <Link to='/'> <button>Return Home</button></Link>
            </div>
        </div>
    )

    


}

export default SignUp