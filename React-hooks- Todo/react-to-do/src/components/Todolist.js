import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from  '@material-ui/icons/Save'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import { makeStyles, ThemeProvider , createMuiTheme} from '@material-ui/core/styles'
import { orange , green, red } from '@material-ui/core/colors'
import 'fontsource-roboto'; 
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'


const useStyles = makeStyles({
    root: {
         background: 'linear-gradient(45deg, #333, #999)',
         border: 0,
         borderRadius: 15,
         color: 'white',
         padding:'0 30px',
         marginBottom: 20
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[500]
        },
        secondary: {
            main: green[400]
        }
    }
})

function ButtonStyled() {
    const classes = useStyles();
    return <Button className ={classes.root}>Test Styled Button</Button>
}


function Checkboxexample() {
    const [checked, setchecked] = React.useState(true)
    return (
        <FormControlLabel
        control = {<Checkbox 
            checked = {checked}
            onChange={(e) => setchecked(e.target.checked)} />}
        label="testing check box "
        />
          
      
    )
}

function Todolist() {
    return (
        <ThemeProvider theme = {theme} >
            <Container maxwidth="sm">
                {/* <div className="App"> */}
                    <header className="App-header">
                        <AppBar>
                            <Toolbar>
                            <Grid container spacing={10} justify="between">
                                <IconButton style ={{color:'black'}}>
                                    <MenuIcon />
                                </IconButton>
                                <Grid item sm={1}>
                                <Typography variant = "h6" >Home</Typography>
                                </Grid>
                                <Grid item sm={1}>
                                <Typography variant = "h6" >Posts</Typography>
                                </Grid>
                                <Grid item sm={1}>
                                <Typography variant = "h6" >Comments</Typography>
                                </Grid>
                                <Grid item sm={1}>
                                <Typography variant = "h6" >Photos</Typography>
                                </Grid>
                                <Grid item sm={1}>
                                <Typography variant = "h6" >Favourites</Typography>
                                </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                <div className = "After-Nav">
                <Typography variant = "h3" >
                    Welcome to MUI
                </Typography>
                <Typography variant = "subtitle">
                    Welcome to MUI
                </Typography>
                <ButtonStyled/>
                
                <Grid container spacing={2} justify="start">
                <Grid item lg={4} sm={4}>
                     <Paper style= {{ height:75, width:'100%', color:'red' }} >
                         hi how are you </Paper>
                </Grid>

                <Grid item lg={4} sm={4} >
                     <Paper style= {{ height:75, width:'100%', color:red }} />
                </Grid>

                <Grid item lg={4} sm={4}>
                     <Paper style= {{ height:75, width:'100%', color:red }} />
                </Grid>

                </Grid>

                <br/>
                <TextField variant = "outlined" color="secondary" type="Date"/>
                <br/>
                <Checkboxexample/>
                <br/>
            <Button startIcon = {<SaveIcon />} variant="contained" color="primary">
                Save
            </Button>  
            <Button startIcon = {<SaveIcon />} variant="contained" color="secondary">
                Discard
            </Button> 
                </div>
            </header>
            </Container>

        </ThemeProvider>
    )
}

export default Todolist


