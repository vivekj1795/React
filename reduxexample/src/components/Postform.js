import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPosts } from '../actions/postactions'

class Postform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: '',
            body:'',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        console.log('submitted')
        const post = {
            title : this.state.title,
            body: this.state.body
        }
        console.log('calling')
        this.props.createPosts(post);
     }

    render() {
        console.log('recieved')
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                        <div>
                            <label>Title</label>
                            <br/>
                            <input type="text" name="title" value={this.state.title} onChange = {this.onChange}/>
                        </div>
                        <br/>
                        <div>
                            <label>body</label>
                            <br/>
                            <textarea name="body" value = {this.state.body} onChange = {this.onChange}/>
                        </div>
                        <br/>

                    <button type = "submit">submit</button> 

                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPosts: PropTypes.func.isRequired
}

export default connect(null, { createPosts })(Postform)
