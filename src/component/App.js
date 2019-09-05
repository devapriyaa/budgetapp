import React, { Component } from 'react';
import Firebase from 'firebase';
import config from '../server';


class App extends Component {
    constructor(props) {
        super(props);
        Firebase.initializeApp(config.firebase);

        this.state = {
            developer: []
        }
    }

    writeData = () => {
        Firebase.database().ref('/').set(this.state);
        console.log("Data saved");
    }

    getData = () => {
        let ref = Firebase.database().ref('/');
        ref.on('value', snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
        console.log("Data retrived");
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevStates){
        if(prevStates!==this.state){
            this.writeData();
        }
    }
}

export default App;