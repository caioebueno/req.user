
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';
import API from "../utils/API";
import Header from "./header";

class Login extends React.Component {

    state = {
        username: ""
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
        
      };

    componentDidMount = () => {
        API.get("http://localhost:8080/api/user_data")
            .then(result => {
                console.log(result);
            })
    }
    

    render (){
        return( 
        <div>
            <Header username={this.state.username} />
        </div>
        )
    }
}

export default Login;