import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar =withRouter(({props}) => {
  //   setTimeout(()=> {
  //     props.history.push('/comments')
  // },5000)

    return (
        <div>
             <AppBar>
        <Toolbar>
          <Grid container spacing = {0} justify = "start">
            <Grid sm={2} >
            <h5>
               <NavLink exact={true} to='/'>Home</NavLink></h5>
              </Grid>
            <Grid sm={2} >
            <Typography variant='h5' color = 'inherit' > 
               <Link to="/profile">Profile</Link></Typography>
            </Grid>
            <Grid sm={2} >
            <Typography variant='h5' color = 'inherit' > 
            <Link to="/posts">Posts</Link></Typography>
            </Grid>
            <Grid sm={2} >
            <Typography variant='h5' color = 'inherit' > 
            <Link to="/comments">Comments</Link></Typography>
            </Grid>
            <Grid sm={2} >
            <Typography variant='h5' color = 'inherit' > 
            <Link to="/photos">Photos</Link></Typography>
            </Grid>
         </Grid>
        
        </Toolbar>
      </AppBar>
        </div>
    )
})

export default withRouter(Navbar)

