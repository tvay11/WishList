import React, {useState} from "react";
import {Grid} from "@mui/material";
import {Paper} from "@mui/material";
import {TextField} from "@mui/material";
import {FormControlLabel} from "@mui/material";
import {Checkbox} from "@mui/material";
import {Button} from "@mui/material";
import background from "./SignUpPic.jpg";
import { useHistory } from "react-router-dom";
import {auth} from './Firebase'

import {createUserWithEmailAndPassword} from 'firebase/auth'

function SignUp() {
    const[registerEmail,setRegisterEmail] = useState("")
    const[registerPassword,setRegisterPassword] =useState("")
    const history = useHistory();

    const clicker = async () =>{
        register()
        routeChange()
    }
    const routeChange = () =>{
        let path = `/`;
        history.push(path);
    }

    const register= async ()=> {
        try {
            const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
            console.log(user)
        } catch (error){
            console.log(error.message)
        }
    }
    const paperStyle={padding:15,height:'60vh',width:'30vh'}


    return(
        <div
            className="bg_image"
            style={{
                backgroundImage: 'url(' + background + ')',
                backgroundSize: "cover",
                height: "100vh",
                opacity: ".95"

            }}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', opacity:'0.90'}}>
                <Grid aligh='center' >

                    <Paper style={paperStyle}>
                        <h1>Sign Up </h1>
                        <div >
                            <TextField id="standard-basic" label="Email Address" variant="standard" fullWidth required sx={{ mt: 3, mb: 2 }} onChange={(event)=>{setRegisterEmail(event.target.value)}}/>
                            <TextField id="standard-basic" label="Password" variant="standard" type="password" fullWidth required onChange={(event)=>{setRegisterPassword(event.target.value)}}/>
                        </div>
                        <FormControlLabel control={<Checkbox>
                        </Checkbox>} label="Remember Me"></FormControlLabel>
                        <Button type="Submit" fullWidth required  variant="contained" sx={{ mt: 3, mb: 2 }} onClick={clicker}>Sign Up</Button>
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}
export default SignUp