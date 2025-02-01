import React, {Component} from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Grid, Button, Typography} from '@mui/material'
//import {Link} from "react-router-dom"

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
        };
        this.roomCode = this.props.params.roomCode;
        this.getRoomDetails = this.getRoomDetails.bind(this);
        this.leaveButtonPressed = this.leaveButtonPressed.bind(this);
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
        //    console.error("Enter fetching room details:", error);
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