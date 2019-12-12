import React,{useState} from 'react';
import styled from 'styled-components';
import AppCheckbox from '../components/AppCheckbox';
import firebaseOperation from '../env/firebase_config';
import {useHistory} from 'react-router-dom';

  const color = {
    black: {
        light: '#404040',
        dark: '#000000'
    },
    white: {
        white: '#ffffff',
        halfwhite: '#EDF5E1'
    },
    blue: {
        dark: '#0dbd93',
        light: '#19FFC8'
    },
    darkgreen: {
        dark: '#05386B',
        light: '#379683'
    }
}

const AppWrapper = styled.div`
    margin: 200px auto;
    border: none;
    width: 500px;
`;
const TabBar = styled.div`
    
`;
const ContentBar = styled.div``;
const TabButton = styled.button`
    border:none;
    background-color: ${color.black.light};
    height: 100%;
    width: 50%;
    color: ${color.blue.light};
    font-size: 25px;
    padding: 15px;
    font-family: 'Montserrat', sans-serif;
`;
const AppContent = styled.form`
    display: grid;
    padding: 20px;
    grid-gap: 20px;
  `;
const AppField = styled.fieldset`
    border: 1px solid;
   border-color: ${color.white.halfwhite};
   height: 50px;
  `;
const Applegend = styled.legend`
    color: ${color.white.halfwhite};
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
  `;
const AppInput = styled.input`
    border: none;
    background: none;
    width: 100%
  `;

const AppLabel = styled.label`
    color: ${color.white.halfwhite};
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
  `;
const AppButton = styled.button`  
    background-color: ${color.blue.dark};
    border: none;
    height: 50px;
    color: ${color.white.halfwhite};
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;
  `;

export default function Account(){
    //hook is used to set the current tab.
    //2 rules of hook (eslint plugin to enforce hook rules)
    const [selectedTab, setSelectedTab] = useState('signin');
    let history = useHistory();

    const changeTab = (e) => {
        const tab_name = e.target.name;
        setSelectedTab(tab_name);
    }
    return (
        <AppWrapper>
            <TabBar>
                <TabButton name="signin" onClick={changeTab}>SIGN IN</TabButton>
                <TabButton name="signup" onClick={changeTab}>SIGN UP</TabButton>
            </TabBar>
            <ContentBar>
                <UserForm selectedTab={selectedTab} />
            </ContentBar>
        </AppWrapper>
    );

    function UserForm(props) {
        const [checked, setChecked] = useState(false);
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const checkboxChange = (e) => {
            setChecked(!checked);
        }

        const handleEmailChange = (e) => {
            setEmail(e.target.value);
        }

        const handlePasswordChange = (e) => {
            setPassword(e.target.value);
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
                history.replace('/dashboard');
                console.log("signed in");
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
                if(result === true){
                    var value = firebaseOperation.getCurrentUser();
                    console.log(value);
                }  
            }
        }
        return (
            <>
                {props.selectedTab === 'signin' ?
                    //Signin Form
                    <AppContent>
                        <AppField>
                            <Applegend>Username</Applegend>
                            <AppInput id="email" type="text" name="email" onChange={handleEmailChange} />
                        </AppField>
                        <AppField>
                            <Applegend>Password</Applegend>
                            <AppInput id="password" type="password" name="password" onChange={handlePasswordChange} />
                        </AppField>
                        <AppLabel>
                            <AppCheckbox status={checked} onChange={checkboxChange} />Remember Me
                        </AppLabel>
                        <AppButton type="submit" onClick={isSigningIn} name="signin">SIGN IN</AppButton>
                    </AppContent> :
                    //Signup form
                    <AppContent>
                        <AppField>
                            <Applegend>Email</Applegend>
                            <AppInput id="email" type="text" name="email" onChange={handleEmailChange} />
                        </AppField>
                        <AppField>
                            <Applegend>Password</Applegend>
                            <AppInput id="password" type="password" name="password" onChange={handlePasswordChange} />
                        </AppField>
                        <AppButton type="submit" onClick={isSigningUp}>SIGN UP</AppButton>
                    </AppContent>
                }
            </>
        );
    }
}