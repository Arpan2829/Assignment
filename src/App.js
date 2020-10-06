import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {store} from './store/store'
import { connect } from "react-redux";
import { changeArray } from './actions/ActionSearchFunction';
import {Grid, Paper, Typography, Checkbox} from "@material-ui/core"
import FormControlLabel from '@material-ui/core/FormControlLabel'


function App(props) {
  const [data, setData] = useState({
    "First":[
        "Hello",
        "Hi",
        "Hola",
        "Namaste"
    ]})
  const [firstData, setFirstdata] = useState([])
  const [show, setShow] = useState(true)
  const [firstArray, setFirstArray] = useState(props.firstArray)
  const [release, setrelease] = useState(true)

  const handleChange=(row)=>{
    let newData = firstData
    if(newData.indexOf(row)===-1){
      newData.push(row)
    }
    else{
      if(newData.length>1){
        let index = newData.indexOf(row)
        newData.splice(index,1)
      }
      else{
        newData=[]
      }
    }
    setFirstdata(newData)
    setrelease(!release)
    store.dispatch(changeArray("CHANGEARRAY",newData))
  }

  const changeState=()=>{
    setShow(false)
    setFirstArray(props.firstArray)
    setShow(true)
  }
  useEffect(()=>{
    changeState()
  },[release])

  return (
    <div className="App">
      <Grid container  style={{backgroundColor:"#9975D7"}}>
        <Grid item xs={6} style={{padding:"50px"}}>
          <Paper style={{height:"550px", padding:"20px"}}>
            <Grid item xs={12}>
              <Typography style={{fontSize:"18px"}}>First</Typography>
            </Grid>
            {data.First.map(row=>{
              return <Grid item xs={12} style={{display:"flex"}}>
                <FormControlLabel
                  control={<Checkbox onChange={()=>handleChange(row)}/>}
                  label={row}
                />
              </Grid>
            })}
          </Paper>
        </Grid>
        <Grid item xs={6} style={{padding:"50px"}}>
          {show && <Paper style={{height:"550px", padding:"20px"}}>
            {props.firstArray!=undefined && props.firstArray.length>0 && <Grid container>
              <Grid item xs={12}>
                <Typography>First</Typography>
              </Grid>
              {props.firstArray.map(row=>{
                return <Grid item xs={12}>
                        <Typography>{row}</Typography>
                      </Grid>
              })}
            </Grid>}
          </Paper>}
        </Grid>
      </Grid>
      
      
    </div>
  );
}

function mapStateToProps(state){
  return{
  firstArray:state.firstArray
  }
}

export default connect(mapStateToProps)(App);
