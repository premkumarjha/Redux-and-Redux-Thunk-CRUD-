import React, {useState, useEffect, useCallback} from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import {deleteEmployee,addEmployee,updateEmployee} from '../actions/employeeAction';
import { BrowserRouter as Router, Route, Link, Switch,useParams } from 'react-router-dom'; 
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

const EditUser=(props)=>{

    const classes = useStyles();

    //to fetch id from url 
    let { id } = useParams();

    let editedUser=props.todo.filter(data=>data.id==id); //editedUser me ak hi user object hai
    //converting above array into object,so that initial value me set kar sake;
  let  object = Object.assign({}, ...editedUser);

    console.log(props.todo);

    const { register, handleSubmit ,reset,defaultValues } = useForm({defaultValues: { id: object.id, name: object.name,email: object.email }});

    const onSubmit = data => {
      console.log(data);
      props.editUser(data);
      //to clear field after update
     reset({defaultValues: { id: "", name: "",email: "" }});
     
    }
    

    console.log(id);
return (
<>

<Grid container spacing={3}>
        <Grid item xs={3}>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        <Button variant="contained"  style={{marginLeft:40,marginTop:40}} color="secondary">Go to Home</Button>
          </Link>
        
        </Grid>

        <Grid item xs={6} style={{marginTop:30}}>
        <Card className={classes.root} style={{marginRight:100,height:250,marginLeft:100}}>
      <CardContent>
       
        {/* {editedUser.map(data=>( */}
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>employee id:</label> 
      {/* <input  defaultValue={ data.id} {...register("id")} />
        */}
     <input   {...register("id")} /> 
      
     <label>employee name:</label>
      {/* <input defaultValue={ data.employeeName } {...register("employeeName")} /> */}
      <input {...register("name")} />
     
      
      <label>employee email:</label>
      {/* <input defaultValue={data.employeeDepartment} {...register("employeeDepartment")} /> */}
      <input  {...register("email")} />
      
      
      <Button variant="contained" type="submit" style={{display:"block",marginTop:15}}  color="secondary">update</Button>
      {/* <Button variant="contained" type="submit" style={{marginLeft:40,marginTop:40}} color="secondary">submit</Button> */}
    </form>
             {/* ))}   */}
           </CardContent>
    </Card>
        </Grid>
        <Grid item xs={3}>
        
        </Grid>
      </Grid>

    </>
)


}

const mapStateToProps = state => {
    return {
      todo: state.employees
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        editUser: (data) => {  
        dispatch(updateEmployee(data)) 
      }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditUser)