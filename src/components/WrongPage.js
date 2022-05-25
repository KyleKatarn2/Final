import { Link } from "react-router-dom"

const WrongPage = () =>{

    return(
        <div>
            <h1>Does Not Exist!</h1>

            <div>
                <Link to="/"> <button>Return Home</button></Link>
            </div>
        </div>
    )
}

export default WrongPage