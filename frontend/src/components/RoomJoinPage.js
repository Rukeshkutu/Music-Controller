/*import React, {Component} from "react";
import { Typography, Button, Grid, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel, Grid2 } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


export default class RoomJoinPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            roomCode : "",
            error: ""
        };
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this)
        this.roomButtonPressed = this.roomButtonPressed.bind(this)
    }

    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h3" variant="h3">
                        Join A Room
                    </Typography>
                </Grid>
            
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField
                            error = {this.state.error}
                            label = "Code"
                            placeholder = "Enter a room Code"
                            value={this.state.roomCode}
                            helperText = {this.state.error}
                            variant="outlined"
                            onChange={this.handleTextFieldChange}
                        />

                        <FormHelperText>
                            <span style={{ textAlign: "center", display: "block" }}>
                                Votes required to Skip Song
                            </span>
                        </FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item xs={12} align="center">
                    <Button color="primary" variant="contained" onClick={this.roomButtonPressed}>Enter Room</Button>
                </Grid>

                <Grid item xs={12} align="center">
                    <Button color="secondary" variant="contained" component={Link} to="/">Back</Button>
                </Grid>
            </Grid>
        )
    }
    handleTextFieldChange(e){
        this.setState({
            roomCode: e.target.value,
        });
    }

    roomButtonPressed(){
        const requestOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                code: this.state.roomCode,
            })
        }  ;
        fetch('api/join-room/', requestOptions).then((response) => {
            if(response.ok){
                this.props.history.push(`/room/${this.state.roomCode}`)
            }else {
                this.setState({error: "Room not found."})
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}*/
//VFQYDE
/*export default function RoomJoinPage() {
    return (
        <div>
            <h1>Join a Room</h1>
        </div>
    );
}*/
import React, { useState } from "react";
import {
  Typography,
  Button,
  Grid,
  TextField,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function RoomJoinPage() {
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleTextFieldChange = (e) => {
    setRoomCode(e.target.value);
  };

  const roomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: roomCode }),
    };

    fetch("/api/join-room/", requestOptions)
      .then((response) => {
        if (response.ok) {
          navigate(`/room/${roomCode}`);
        } else {
          setError("Room not found.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h3" variant="h3">
          Join A Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl>
          <TextField
            error={!!error}
            label="Code"
            placeholder="Enter a room code"
            value={roomCode}
            helperText={error}
            variant="outlined"
            onChange={handleTextFieldChange}
          />
          <FormHelperText>
            <span style={{ textAlign: "center", display: "block" }}>
              Votes required to Skip Song
            </span>
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="primary" variant="contained" onClick={roomButtonPressed}>
          Enter Room
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="secondary" variant="contained" component={Link} to="/">
          Back
        </Button>
      </Grid>
    </Grid>
  );
}
