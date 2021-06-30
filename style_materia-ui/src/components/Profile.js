import React, { Component } from 'react'
import axios from 'axios' 

class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:[]
        }
    }

    componentDidMount(){
        axios.get('./data.json')
        .then(res =>{
            this.setState({
                user:res.data
            })
            console.log(this.state.user)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    

    render() {

        const user = this.state.user;
        return (
            <div>
                <h4>ID - {user.id}</h4>
                <h4>Name - {user.name}</h4>
                <h4>Email - {user.email}</h4>
            </div>
        )
    }
}

export default Profile
