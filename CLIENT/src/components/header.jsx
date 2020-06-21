
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';

class header extends React.Component {

    state = {
        
    }

    render (){
        return( 
        <div>
            <h1>Ola {this.props.username}</h1>
        </div>
        )
    }
}

export default header;