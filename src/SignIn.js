import React,{useState} from "react";
import {Grid, Link, Typography} from "@mui/material";
import {Paper} from "@mui/material";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import background from "./SignInPic.jpg";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from './Firebase'
import { useHistory } from "react-router-dom";



function SignIn() {

    const paperStyle={padding:15,height:'60vh',width:'30vh'}
    const[loginEmail,setLoginEmail] = useState("")
    const[loginPassword,setLoginPassword] =useState("")
    const history = useHistory();
    const clicker = async () =>{
        login()
        routeChange()
    }
    const routeChange = () =>{
        let path = `/`;
        history.push(path);
    }
    const login = async () =>{
        try{
            const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
            console.log(user)

        }catch (error){
            console.log(error.message)
        }
    }


    return(
        <div
            className="bground"
            style={{
                backgroundImage: 'url(' + background + ')',
                backgroundSize: "cover",
                height: "100vh",
                opacity: ".95"

            }}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', opacity:'0.90'}}>
                <Grid aligh='center' >

                    <Paper style={paperStyle}>
                        <h1 align='left' style={{opacity:"0.8"}}>Welcome </h1>
                        <h4 align='left' style={{opacity:"0.6"}}>Please Sign In Here</h4>
                        <div >
                            <TextField id="standard-basic" label="Email Address" variant="standard" fullWidth required  onChange={(event)=>{setLoginEmail(event.target.value)}}/>
                            <TextField id="standard-basic" label="Password" variant="standard" type="password" sx={{ mt: 3, mb: 2 }} fullWidth required onChange={(event)=>{setLoginPassword(event.target.value)}}/>
                        </div>
                        <Button type="Submit" fullWidth required  variant="contained" onClick={clicker}>Sign in</Button>
                        <Typography sx={{ mt: 2, mb: 3 }}>
                            <Link href= '/SignUp' underline="hover">
                                Sign up Here
                            </Link>
                        </Typography>
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}
export default SignIn