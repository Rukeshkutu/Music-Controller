import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import Room from "./Room";
import { BrowserRouter as Router, Route, Routes,  Link, Redirect} from "react-router-dom";
export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<Router>
                    <Routes>
                        <Route exact path="/" element = "{ojoafasfaa}" />

                        <Route path="/join" element={<RoomJoinPage />} />
                        <Route path="/create" element={<CreateRoomPage />} />
                        <Route path = "/room/:roomCode" element = {<Room />} />
                    </Routes>
            </Router>)    
    };
}