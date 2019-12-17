import React from 'react';
//import firebase from 'firebase';
//import FirebaseConfig from '../env/firebase_config';




   
    /*Data retrieved with asynchronous listener.
    The listener is triggered once for the initial state of 
    the data and again anytime the data changes.*/

    //writes to database
    //push() -> writes to database with unique push ID.
    // writeData = (Username, Password) => {
    //     this.databaseRef.push({
    //         "username": Username,
    //         "password": Password
    //     });
    // }

    // readData = (Username, Password) => {
    //     this.databaseRef.orderByChild("username").equalTo(Username).once("value", function (snapshot) {
    //         snapshot.forEach(function (childSnapshot) {
    //             var cellNum = childSnapshot.val().password;
    //             console.log(cellNum)
    //         });
    //     });
    // }


    // handleChange = e => {
    //     this.setState({
    //         [e.target.id]: e.target.value
    //     })
    // }

    // handleClick = e => {
    //     e.preventDefault();
    // }

    render() {
        return (
            <div> 
                  
            </div>
        );
    }
}

export default updateDatabase;

