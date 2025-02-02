import React, {Component} from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Grid, Button, Typography, Grid2} from '@mui/material'
//import {Link} from "react-router-dom"
import CreateRoomPage from "./CreateRoomPage";

const withParams = (Component) => {
    return (props) => {
        const params = useParams();
        const navigate = useNavigate();
        return <Component{...props} params = {params} navigate = {navigate} />;
    };
};

class Room extends Component{
    constructor(props){
        super(props)
        this.state = {
            votesToSkip: 2,
            guestCanPause: false,
            isHost:false,
            showSettings: false,
        };
        this.roomCode = this.props.params.roomCode;
        this.getRoomDetails = this.getRoomDetails.bind(this);
        this.leaveButtonPressed = this.leaveButtonPressed.bind(this);
        this.updateShowSettings = this.updateShowSettings.bind(this);
    }

    componentDidMount(){
        this.getRoomDetails();
    }

    //fetch room detail from api
    getRoomDetails(){
        fetch('/api/get-room/?code=' + this.roomCode)
        .then((response) => {
            if (!response.ok) {
                this.props.leaveRoomCallback();
                this.props.navigate("/");
                throw new Error("Room not found.");
                
            }
            return response.json()
        })
        .then((data) => {
            //if (data){
            this.setState({
                votesToSkip: data.vote_to_skip,
                guestCanPause: data.guest_can_pause,
                isHost: data.is_host,
            });
           // }
        });
        //.catch((error) => {
        //    console.error("E nter fetching room details:", error);
        //});
    }

    //Handle leaving the room
    leaveButtonPressed (){
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
        }; 
        fetch('/api/leave-room/', requestOptions)
        .then((_response) => {
            this.props.leaveRoomCallback();
            this.props.navigate('/');
        });  
    }

    updateShowSettings(value){
        this.setState({
            showSettings: value,
        });
    }

    renderSettings(){
        <Grid container spacing={1}>
            <Grid item xs ={12} align = "center">
                <CreateRoomPage update = {true} votesToSkip = {this.state.votesToSkip} guestCanPause = {this.state.guestCanPause} roomCode = {this.roomCode} updateCallback = {} />
            </Grid>
            <Grid item xs ={12} align = "center">
                <Button variant="contained" color="secondary" onClick={() => this.updateShowSettings(false)}>Close </Button>
            </Grid>
        </Grid>
    }

    rendeSettingButton(){
        return(
            <Grid item xs = {12} align = "center">
                <Button variant="contained" color="primary" onClick={() => this.updateShowSettings(true)}>
                    Settings
                </Button>
            </Grid>
        );
    }

    render(){
        return(
            <Grid container spacing={1}>
                <Grid item xs ={12} align = "center">
                    <Typography variant="h4" component= "h4">
                        Room Code: {this.roomCode}
                    </Typography>
                </Grid>
                <Grid item xs ={12} align = "center">
                    <Typography variant="h4">
                        Votes to Skip: {this.state.votesToSkip}
                    </Typography>
                </Grid>
                <Grid item xs ={12} align = "center">
                    <Typography variant="h6">
                    Guest Can Pause: {this.state.guestCanPause.toString()}
                    </Typography>
                </Grid>
                <Grid item xs ={12} align = "center">
                    <Typography variant="h6">
                        Host: {this.state.isHost.toString()}
                    </Typography>
                </Grid>
                {this.state.isHost ? this.rendeSettingButton() : null}
                <Grid item xs ={12} align = "center">
                    
                    <Button variant = "contained" color = "secondary" onClick={this.leaveButtonPressed}>
                        Leave Room
                    </Button>
                    
                </Grid>
            </Grid>

        );
    }
}
export default withParams(Room);