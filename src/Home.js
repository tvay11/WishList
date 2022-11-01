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
import ItemAdder from "./ItemAdder";
import ItemList from "./ItemList";





export default function Home() {

    const paperStyle={padding:15,height:'70vh',width:'60vh'}

    const history = useHistory();
    const Sign = () =>{
        let path = `/SignIn`;
        history.push(path);
    }
    const logout = async ()=> {
        await signOut(auth)
    }

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            const uid = user.uid;
            const email = user.email;
            // ...
        } else {
        }
    });



    return (
        <div
            className="bground"
            style={{
                backgroundImage: 'url(' + background + ')',
                backgroundSize: "cover",
                height: "100vh",
            }}>
            <AppBar color='inherit' >
                <Toolbar>
                    <div style={{alignItems:'center',position:'absolute',right:'100px'}}>
                    <Button  variant="outlined" onClick={Sign}  sx={{ mx: 3, my:  0}}>Sign in</Button>
                    <Button variant='outlined' onClick={logout()} color='primary'>Log Out</Button>

                </div>
                </Toolbar>

            </AppBar>
            <ItemList/>
        </div>
    )
}