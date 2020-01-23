import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AppCheckbox from '../components/AppCheckbox';
import firebaseOperation from '../env/firebase_config';
import {useHistory} from 'react-router-dom';
import color from '../env/colors';
 import createBudget from "./createBudget"; 

const AppWrapper = styled.div`
    margin: 150px auto;
    border: none;
    width: 500px;
    height: 400px;
`;
const TabBar = styled.div` 
`;
const TabButton = styled.button`
    background-color: ${props => props.changeTabColor === props.name ? color.grey.light_grey : "white"}
    color: ${props => props.changeTabColor === props.name ? "white" : color.grey.dark_grey}
    border:none;
    height: 100%;
    width: 50%;
    font-size: 25px;
    padding: 15px;
    font: 23px 'Quicksand', sans-serif;
`;
const ContentBar = styled.div``;
const AppContent = styled.form`
    color: ${color.grey.dark_grey}
    display: grid;
    padding: 20px;
    grid-gap: 20px;
    font: 17px 'Quicksand', sans-serif;
  `;
const AppField = styled.fieldset`
    border: 1px solid;
    height: 50px;
  `;
const Applegend = styled.legend`
    font: 17px 'Quicksand', sans-serif;
  `;
const AppInput = styled.input`
    border: none;
    background: none;
    width: 100%;
    font: 17px 'Quicksand', sans-serif;
  `;

const AppLabel = styled.label`
    font: 17px 'Quicksand', sans-serif;
  `;
const AppButton = styled.button`  
    background-color: ${color.grey.light_grey}
    color: white
    border: none;
    height: 50px;
    font: 23px 'Quicksand', sans-serif;
  `;

export default function Account(props){
    //hook is used to set the current tab.
    //2 rules of hook (eslint plugin to enforce hook rules)
    const [selectedTab, setSelectedTab] = useState('signin');
    let history = useHistory();

    useEffect(()=>{
        if(props.Tab){
            setSelectedTab(props.Tab);
        }
    })


    const changeTab = (e) => {
        const tab_name = e.target.name;
        setSelectedTab(tab_name);
    }

    function UserForm(props) {
        const [checked, setChecked] = useState(false);
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [username, setUsername] = useState("");

        const checkboxChange = (e) => {
            setChecked(!checked);
        }

        const handleEmailChange = (e) => {
            setEmail(e.target.value);
        }

        const handlePasswordChange = (e) => {
            setPassword(e.target.value);
        }
        const handleUsernameChange = (e) => {
            setUsername(e.target.value);
            console.log(e.target.value)
        }

        //signing function
        const isSigningIn = async (e) => {
            e.preventDefault();
            var user = {
                userEmail : email,
                userPassword : password
            }
            var result = await firebaseOperation.signingInWithEmailandPassword(user);   
            if(result === true){
                console.log("signed in");
                startBudget();
            }  
        }

        const isSigningUp = async (e) => {
            e.preventDefault();
            var user = {
                userEmail : email,
                userPassword : password
            }
            if (user.userEmail === "" || user.userPassword === "") {
                alert("email or password is missing");
            }
            else {
                var result = await firebaseOperation.signingUpWithEmailandPassword(user);  
                if(result){
                    console.log(username)
                    var storedUserConfirmation = await firebaseOperation.createTable(username);
                    if(storedUserConfirmation){
                        startBudget();
                    }
                }  
            }
        }
        const startBudget = () => {
            history.replace("/startBudget")
            window.location.reload(); 
        }
        return (
            <>
                {props.selectedTab === 'signin' ?
                    //Signin Form
                    <AppContent>
                        <AppField>
                            <Applegend>Email</Applegend>
                            <AppInput id="email" type="text" name="email" onChange={handleEmailChange} />
                        </AppField>
                        <AppField>
                            <Applegend>Password</Applegend>
                            <AppInput id="password" type="password" name="password" onChange={handlePasswordChange} />
                        </AppField>
                        <AppLabel>
                            <AppCheckbox checked={checked} onChange={checkboxChange} />Remember Me
                        </AppLabel>
                        <AppButton type="submit" onClick={isSigningIn} name="signin">SIGN IN</AppButton>
                    </AppContent> :
                    //Signup form
                    <AppContent>
                        <AppField>
                            <Applegend>User Name</Applegend>
                            <AppInput type="text" name="username" onChange={handleUsernameChange} />
                        </AppField>
                        <AppField>
                            <Applegend>Email</Applegend>
                            <AppInput type="text" name="email" onChange={handleEmailChange} />
                        </AppField>
                        <AppField>
                            <Applegend>Password</Applegend>
                            <AppInput type="password" name="password" onChange={handlePasswordChange} />
                        </AppField>
                        <AppButton type="submit" onClick={isSigningUp}>SIGN UP</AppButton>
                    </AppContent>
                }
            </>
        );
    }
    return (
        <AppWrapper slidingIn = {props.openLogin}>
            <TabBar>
                <TabButton changeTabColor={selectedTab} name="signin" onClick={changeTab}>SIGN IN</TabButton>
                <TabButton changeTabColor={selectedTab} name="signup" onClick={changeTab}>SIGN UP</TabButton>
            </TabBar>
            <ContentBar>
                <UserForm selectedTab={selectedTab} />
            </ContentBar>
        </AppWrapper>
    );
}