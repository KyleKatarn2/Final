import { Link } from "react-router-dom"

const Dashboard = () =>{
    
    return(
        <div>
            <h1> About whatever this is </h1>
            <p>
                This is my react router

            </p>
            <div>
                <Link to='/'> <button> Return Home </button> </Link>
            </div>
        </div>
    )
}

export default Dashboard