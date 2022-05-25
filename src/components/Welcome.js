import { Link } from "react-router-dom"

const Welcome = () =>{

    return(
        <div>
            <h1>Welcome!</h1>
            <img src=""></img>

            <div>
                <Link to="about"> <button>About Me</button></Link>
                <Link to="sign-up"><button>Sign Up</button></Link>
            </div>
        </div>
    )
}

export default Welcome