import React from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import {deleteEmployee,addEmployee,updateEmployee} from '../actions/employeeAction';
import { BrowserRouter as Router, Route, Link, Switch ,useParams} from 'react-router-dom'; 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import "../components/ademployee.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


 const  AddUser=(props)=>{

  const classes = useStyles();
  
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data,e) => {
      console.log(data);
      props.addUser(data);
      //to clear field after adding user
      //e.target.reset();
    reset()
    }
   

return(
<>

          <Grid container spacing={3}>
        <Grid item xs={3}>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        <Button variant="contained"  style={{marginLeft:40,marginTop:40}}color="secondary">Go to Home</Button>
          </Link>
        
        </Grid>
        <Grid item xs={6} style={{marginTop:30}}>
        <Card className={classes.root} style={{marginRight:100,height:250,marginLeft:100}}>
      <CardContent>
        
<form onSubmit={handleSubmit(onSubmit)}>
      
        {/* <label>employee id:</label>
      <input  {...register("id")} /> */}
      
      <label>employee name:</label>
      <input   {...register("name")} />
      
      <label>employee email:</label>
      <input  {...register("email")}  />
     
      
      <Button variant="contained" type="submit" style={{display:"block",marginTop:15}} color="secondary">submit</Button>
      
      {/* <input type="submit" /> */}
    </form>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={3}>
        
        </Grid>
      </Grid>
   
    </>
)


}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (data) => {  
      dispatch(addEmployee(data)) 
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddUser)