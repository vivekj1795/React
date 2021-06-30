import React from 'react'
import Container from '@material-ui/core/Container'
import randomTextColor from './HOC/randomTextColor'


function Posts(props) {
    const {randomTextColor} = props
    const text = (() => {
        <h1>Hello World</h1>
    })
    return (
    //    setTimeout(()=> {
    //        props.history.push('/comments')
    //    },5000)
    <div style = {{marginTop:'50px'}}>
        
        <button onClick={() => randomTextColor()}>change colour</button>
     
    </div>
    
       )
}

export default Posts