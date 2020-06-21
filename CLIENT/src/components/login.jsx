
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';
import API from "../utils/API"

class Login extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();

        let url = "http://localhost:8080/api/login"
        let body = {
            email: this.state.email,
            password: this.state.password
        }

        API.post(url, body)
            .then(result => {
                if(result.status === 200){
                    window.location.replace("/main")
                }
            })
            .catch(err => {throw err})

      };
    

    render (){
        return( 
        <div>
            <a href="/signup">Sign Up</a>
            <form>
            <input value={this.state.email} name="email" placeholder="Email" onChange={this.handleInputChange} type="email"/><br/>
            <input value={this.state.password} name="password" placeholder="Password" onChange={this.handleInputChange} type="text"/><br/>
            <button onClick={this.handleFormSubmit}>Log In</button>
            </form>
        </div>
        )
    }
}

export default Login;