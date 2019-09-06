import React from 'react';
//import firebase from 'firebase';
//import FirebaseConfig from '../env/firebase_config';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        var inputName = e.target.id;
        var inputValue = e.target.value;
        this.setState ({
            [inputName]: inputValue
        })
    }


    handleClick = e => {
        e.preventDefault();
        var LoginInfo = {
            Username: this.state.username,
            Password: this.state.password
        }
        document.write(LoginInfo.Username);
        document.write(LoginInfo.Password)
    }

    render() {
        //initialize firebase SDK.
        //firebase.initializeApp(FirebaseConfig);
        //get reference to database service.
        //var database = firebase.database();

        /*Data retrieved with asynchronous listener.
        The listener is triggered once for the initial state of 
        the data and again anytime the data changes.*/

        //writes to database
        //set() -> write or overwrite the data at refered path.
        /* writeData=e=>{
             database.ref('users/' +Username).set({
                 Username: Username,
                 Password: Password
             });
         }*/


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
                <button type="submit" onClick={this.handleClick}>Login</button>
            </div>
        );
    }
}

export default App;