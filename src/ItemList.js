import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/ToolBar";
import background from "./HomePic.jpg";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import {
    Button,
    Dialog,
    DialogActions, DialogContent,
    DialogContentText, DialogTitle,
    Grid,
    Link,
    Paper,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useHistory} from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import AddIcon from '@mui/icons-material/Add';

export default function ItemList()
{

    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    const paperStyle={padding:15,height:'70vh',width:'60vh'}
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    addItem(e){
        e.preventDefault();
};
    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', opacity:'0.85'}}>
                <Paper style={paperStyle}>
                    <h1 align='center' style={{opacity:"0.8"}}>Wish List</h1>
                    <AddIcon fontSize='large' display='flex' style={{}}  onClick={handleClickOpen}></AddIcon>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle style={{fontSize:15, height:20}}>Add an Item</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        </DialogContentText>
                        <Stack component="form" noValidate spacing={3}>
                            <TextField
                                id="date"
                                label="Date"
                                type="date"
                                defaultValue="2017-05-24"
                                sx={{ width: 150, height:40,marginY:.5}}
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
    <TextField id="filled-basic" label="URL" variant="standard" fullWidth required/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose} >Add Item</Button>
                    </DialogActions>
                </Dialog>
                </Paper>
        </div>

    )
};