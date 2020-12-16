import React, { Component } from 'react'
import axios from 'axios';

export class Favorites extends Component {

   state={
      fav:[]
      }
      componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=>{
      //console.log(res);
      let fav=[];
      res.data.forEach(user=>{
      fav.push(user);
      })
      fav=fav.slice(0,9);
      this.setState({
      fav:fav
      })
      })
      }

   render() {
      console.log(this.state.fav)
      this.fav = this.state.fav.map((item =>
         <ul>
         <li key={item.id}>{item.name}</li>
         <li key={item.id}>{item.username}</li>
         <li key={item.id}>{item.email}</li>
         </ul>
         ))
      return (
         <div>
            {this.fav}
            
         </div>
      )
   }
}


export default Favorites
