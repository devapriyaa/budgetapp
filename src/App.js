import React, { useState } from 'react';
import styled from 'styled-components';
import FormComponent from './components/account/FormComponent';

const color = {
    black:{
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

export default function App() {

    //hook used to set the current tab.
    //2 rules of hook (eslint plugin to enforce hook rules)
    const [selectedTab, setSelectedTab] = useState('signin');
    

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
                <FormComponent selectedTab = {selectedTab} /> 
            </ContentBar>
        </AppWrapper>
    );
}
