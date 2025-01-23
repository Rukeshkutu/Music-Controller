import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import Room from "./Room";
import { Grid, Button, Typography } from "@mui/material";

import { BrowserRouter as Router, Route, Routes,  Link, Redirect} from "react-router-dom";
export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    async componentDidMount() {
        
    }

    renderHomePage() {
        return(
            <Grid container spacing={3}>
                <Grid item xs ={12} align = "center">
                    <Typography variant="h3" component="h3">
                        House Party
                    </Typography>
                </Grid>
                <Grid item xs = {12} align = "center">
                    <Button color ="primary" variant = "contained" to = "/join" component ={Link} style = {{marginRight:"10px"}}>
                    Join a Room
                    </Button>
                    <Button color ="secondary" variant = "contained" to = "/create" component ={Link} style = {{marginRight:"10px"}}>
                    Create a Room
                    </Button>
                </Grid>
            </Grid>
        );
    }
    render(){
        return (<Router>
                    <Routes>
                        <Route path="/" element = {this.renderHomePage()} />

                        <Route path="/join" element={<RoomJoinPage />} />
                        <Route path="/create" element={<CreateRoomPage />} />
                        <Route path = "/room/:roomCode" element = {<Room />} />
                    </Routes>
            </Router>)    
    };
}