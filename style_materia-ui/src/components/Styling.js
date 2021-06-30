import React from 'react'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField'
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {orange, green, red} from '@material-ui/core/colors'
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Navbar from './Navbar';



const useStyle = makeStyles ({
  root : {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color:'white',
    width:150,
    marginTop:30,
    padding :'20px 0'
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: green[500]
    }
  }
})


function Checkboxexample() {
  const [checked, setchecked] = React.useState (true)
  return(
    <FormControlLabel
    control = {<Checkbox checked = {checked} onChange={(e) => setchecked(e.target.checked)} />}
    label= "testing check box"
    />
  )
}

function Buttonstyled() {
  const classes = useStyle();
  return <button className={classes.root}>Test style components</button>
}

function Styling() {
    return (
        <div>
            <Container maxwidth="lg">
      <ThemeProvider theme={theme}>
  <div className="main-body">

    <Checkboxexample />
    <div>    
  <Button startIcon = { <SaveIcon/>} color="primary" variant ="contained">Save</Button>
  <Button endIcon = { <DeleteIcon/>} color="secondary" variant ="contained">Discard</Button>
  </div>  
  
  <div className = "text">
  <TextField variant="outlined" color="secondary" type = "date"/>
  </div>
  <Buttonstyled/>
  
  <Typography variant='h3' color = 'inherit'>
    Hello World
  </Typography>
  <h1>Hello World</h1>
  <Typography variant='subtitle2' color = 'inherit'>
    Learning MUI
  </Typography>

  <Container>
  <Grid container spacing={2}>
    <Grid item xs={4} sm={4}>
      <Paper style = {{height:75, width:'100%'}}/>
    </Grid>
    <Grid item xs={4} sm={4}>
      <Paper style = {{height:75, width:'100%'}}/>
    </Grid>
    <Grid item xs={4} sm={4}>
      <Paper style = {{height:75, width:'100%'}}/>
    </Grid>
  </Grid>
  </Container>
  </div>
  </ThemeProvider>
  </Container>
        </div>
    )
}

export default Styling
