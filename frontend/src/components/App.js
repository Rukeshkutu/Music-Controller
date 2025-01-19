import React, { Component } from "react";
import { createRoot } from "react-dom/client"
import HomePage from "./HomePage";
export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="center">
                <HomePage />
            </div>
        );
        
    }
}
/*const App = () => {
    return <h1>Testing React is working or not.</h1>
}*/
const appDiv = document.getElementById ("app")
const root = createRoot(appDiv);
root.render(<App />); 