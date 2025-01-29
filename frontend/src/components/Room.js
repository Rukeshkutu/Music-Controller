import React, {Component} from "react";
import { useParams } from "react-router-dom";
import {Grid, Button, Typography} from '@mui/material'
import {Link} from "react-router-dom"
const withParams = (Component) => {
    return (props) => {
        const params = useParams();
        return <Component{...props} params = {params} />;
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
        this.leaveButtonPressed = this.leaveButtonPressed.bind(this);
    }

    getRoomDetails(){
        fetch('/api/get-room/' + '?code=' + this.roomCode)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                votesToSkip: data.vote_to_skip,
                guestCanPause: data.guest_can_pause,
                isHost: data.is_host,
            });
        });
    }

    leaveButtonPressed (){
        const requestOptions = {
            method: "POST",
            headers: {"Context-Type": "application/json"},
        }; 
        fetch('/api/leave-room/', requestOptions).then((_response) => {
            this.props.history.push('/');
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