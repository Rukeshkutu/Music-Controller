import React, {Component} from "react";
import { Typography, Button, Grid, TextField, FormHelperText, FormControl, Link, Radio, RadioGroup, FormControlLabel, Grid2 } from "@mui/material";
export default class CreateRoomPage extends Component{
    defaulVotes = 1;
    constructor(props){
        super(props);
        this.state = {
            guestCanPause: true,
            voteToSkip: this.defaulVotes,
        };
        this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
        this.handleGuestCanPauseChange =this.handleGuestCanPauseChange.bind(this);
        this.handleVotesChange = this.handleVotesChange.bind(this);
    }

    handleVotesChange(e){
        this.setState({
            voteToSkip: e.target.value,
        });
    }
    handleGuestCanPauseChange(e){
        this.setState({
            guestCanPause: e.target.value === "true" ? true : false,
        });
    }

    handleRoomButtonPressed(){
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                vote_to_skip: this.state.voteToSkip,//here must match with the backend
                guest_can_pause: this.state.guestCanPause,
            }),
        };
        fetch("/api/create-room/", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    render(){
        return (
            <Grid container spacing = {1}>
                <Grid item xs = {12} align = "center">
                    <Typography component="h3" variant = "h3">
                        Create A Room
                    </Typography>
                </Grid>

                <Grid item xs = {12} align = "center">
                    <FormControl component="fieldset">
                        <FormHelperText>
                            <span style={{textAlign:"center", display: "block"}}>
                                Guest control of Playback State
                            </span>
                        </FormHelperText>
                        <RadioGroup row defaultValue="true" onChange={this.handleGuestCanPauseChange}>
                            <FormControlLabel value="true" control={<Radio color = "primary" />} label = "Play/Pause" labelPlacement="bottom" />
                            <FormControlLabel value="false" control={<Radio color = "secondary" />} label = "No Control" labelPlacement="bottom" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs = {12} align = "center">
                    <FormControl>
                        <TextField required 
                            type="number" 
                            onChange={this.handleVotesChange}
                            defaultValue={this.defaulVotes}  
                            inputProps={{
                                min:1,
                                style: { textAlign: "center" },
                            }} 
                        />
                        <FormHelperText>
                            <span style={{textAlign: "center", display: "block"}}> 
                                Votes required to Skip Song
                            </span>
                        </FormHelperText>

                    </FormControl>
                </Grid>

                <Grid item xs = {12} align = "center">
                    <Button color="primary" variant="contained" onClick={this.handleRoomButtonPressed}>Create a Room</Button>
                </Grid>
                <Grid item xs = {12} align = "center">
                    <Button color="secondary" variant="contained" component = {Link} to = "/">Back</Button>
                </Grid>
            </Grid>
        );
    }
}