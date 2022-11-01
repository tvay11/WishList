import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/ToolBar";
import background from "./HomePic.jpg";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import {Button, Grid, Link, Paper, Stack, TextField, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';

export default function ItemAdder()
{
    const paperStyle={padding:15,height:'70vh',width:'60vh'}
    const[URL,setURL] = useState("")
    const[ItemName,setItemName] =useState("")
    const[curPrice,setCurPrice] = useState(0)
    const[lowPrice,setLowPrice] = useState(0)
    const [value, setValue] = React.useState(dayjs('2022-04-07'));
    return(
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', opacity:'0.90'}}>
        <Grid aligh='center'>
            <Paper style={paperStyle}>
                <h1 align='left' style={{opacity:"0.8"}}>Item Tracker </h1>
                <div align='left' >
                    <Stack component="form" noValidate spacing={3}>
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue="2017-05-24"
                            sx={{ width: 200, height:50}}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Stack>
                    <TextField id="filled-basic" label="Item name" variant="standard" fullWidth/>
                    <TextField id="filled-basic" label=" Current Price" variant="standard"  />
                    <Grid container justify="flex-end">
                        <TextField id="filled-basic" label=" Lowest Price" variant="standard"   display="flex"   alignItems="flex-end"
                                   justifyContent="space-between" />
                    </Grid>
                </div>

                <TextField id="filled-basic" label="URL" variant="standard" fullWidth required/>


                <Button type="Submit" fullWidth required  variant="contained" sx={{ mt: 2, mb: 5 }}>Add Item</Button>
            </Paper>
        </Grid>
    </div>
    )
};