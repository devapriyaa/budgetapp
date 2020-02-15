import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Account from './Account';
import piggy from '../env/images/Piggy-Bank.jpg';
import Icon from '../components/Icon';

const slideIn = keyframes`
    from { height: 0px; }
    to { height: 700px; }
`;

const slideOut = keyframes`
    from { height: 700px; }
    to { height: 0px; }
`; 

const Background = styled.div`
            position: relative;
            background: url(${piggy});
            background-color: #cccccc;
            height: 700px;
            width: 100%
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
       `;

const LoginPage = styled.div`
            position: absolute;
            background-color: white;
            overflow: hidden;
            top: 0;
            left: 0;
            width: 100%;
            animation: 1s ${p => p.openLogin ? slideIn : slideOut} ease-in;
            display: ${props => props.openLogin ? 'block' : 'none'};
        `;

const Title = styled.h2`
            position: absolute;
            top: 25%;
            left: 50%;
            transform: translate(-50%, -50%);
            font: 50px 'Quicksand', sans-serif;
            color: white; 
       `;
const LoginButton = styled.button` 
            position: absolute;
            background: none;
            border-style: solid;
            border-color: white;
            border-radius: 20px;
            font: bold 20px 'Quicksand', sans-serif;
            color: white;
            padding: 10px 30px;
            top: 55%;
            left: 50%;
            transform: translate(-50%, -50%);
       `;

const NewAccount = styled.button`
            background: none;
            border: none;
            position: absolute;
            top: 65%;
            left: 50%;
            transform: translate(-50%, -50%);
            font: 15px 'Quicksand', sans-serif;
            color: white; 
       `;
const CloseIcon = styled.span`
            position: absolute;
            top: 5%;
            left: 95%;
           
        `;
export default function Home(props) {
        const [tabStatus,setTabStatus] = useState(false)
        const openLoginPage = (e) => {
            e.preventDefault();
            props.LoginPageStatus(true);
            if(e.target.name === "signup"){
                setTabStatus("true")
            }
        }
        const closeLoginPage = () => {
            props.LoginPageStatus(false);
        }
        
        return (
            <>
            {props.username ? 
            <Background>
            <h1>{props.username}</h1>
        </Background>:
            <Background>
                <Title>Budget..Spend..Save</Title>
                <LoginButton onClick={openLoginPage}>SIGN IN</LoginButton>
                <NewAccount  name="signup" onClick={openLoginPage}>Join Us</NewAccount>
                <LoginPage openLogin={props.openLogin}>
                    <CloseIcon onClick={closeLoginPage}>
                        <Icon color="black" icon="Close" width="40" height="40" />
                    </CloseIcon>
                    <Account Tab={tabStatus}/>
                </LoginPage>
            </Background> 
            }
            </>
        );
    }