import React, { Component } from "react";
//import { render } from "react-dom";
import { createRoot } from "react-dom/client"
import HomePage from "./HomePage";
export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <HomePage />
            </div>
        );
        //return <h1>Testing React if it is working!</h1>;
        //return <h1>{this.props.name}</h1>
    }
}
/*const App = () => {
    return <h1>Testing React is working or not.</h1>
}*/
const appDiv = document.getElementById ("app")
const root = createRoot(appDiv);
root.render(<App />); 