import React from "react";
import SignUp from "./SignUp";
import Welcome from "./Welcome";

class Authorization extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isSignedUp: false,
        }
    }

    authChangeCallBack = () => {
        this.setState({isSignedUp: true})
    }

    showWelcome = () => {
        if (this.state.isSignedUp) {
            return <Welcome />
        } else {
            return <SignUp userAuthChanged = {this.authChangeCallBack} />
        }
    }

    render() {
        return <div>{this.showWelcome}</div>
    }
}

export default Authorization