import React from 'react';
import firebase from 'firebase';
import FirebaseConfig from '../env/firebase_config';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        //initialize firebase SDK.
        firebase.initializeApp(FirebaseConfig);
        //get reference to database service.
        this.database = firebase.database();
        this.databaseRef = this.database.ref('users/');
    }

    /*Data retrieved with asynchronous listener.
    The listener is triggered once for the initial state of 
    the data and again anytime the data changes.*/

    //writes to database
    //push() -> writes to database with unique push ID.
    writeData = (Username, Password) => {
        this.databaseRef.push({
            "username": Username,
            "password": Password
        });
    }

    readData = (Username,Password) => { 
        this.databaseRef.on("value", function(snapshot) {
            console.log(snapshot.val());
    })
}


handleChange = e => {
    var inputName = e.target.id;
    var inputValue = e.target.value;
    this.setState({
        [inputName]: inputValue
    })
}


handleClick = e => {
    e.preventDefault();
    var LoginInfo = {
        Username: this.state.username,
        Password: this.state.password
    }
    if (e.target.value === "register") {
        this.writeData(LoginInfo.Username, LoginInfo.Password);
    }
    else {
        this.readData(LoginInfo.Username, LoginInfo.Password);
    }
}

render() {

    return (
        <div className="container">
            <h1>Login</h1>
            <label>Username</label>
            <input
                type="text"
                id="username"
                onChange={this.handleChange}
            />
            <label>Password</label>
            <input
                type="text"
                id="password"
                onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleClick} value="register">Register</button>
            <button type="submit" onClick={this.handleClick} value="Login">Login</button>
        </div>
    );
}
}

export default App;