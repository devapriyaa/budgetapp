import React, {useState} from 'react'; 
import styled from 'styled-components';
import AppCheckbox from './AppCheckbox'; 

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
  
  const AppContent = styled.form`
    display: grid;
    padding: 20px;
    grid-gap: 10px;
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
  

export  default function FormComponent(props){ 
const [checked, setChecked] = useState(false);

const checkboxChange = (e) =>{
  setChecked(!checked);
}

return (
    <AppContent>
      <AppField>
        <Applegend>Username</Applegend>
        <AppInput type = "text" />
      </AppField>
      <AppField>
        <Applegend>Password</Applegend>
        <AppInput type = "password" />
      </AppField>
      <AppLabel>
        <AppCheckbox status={checked} onChange={checkboxChange}/>Remeber Me
      </AppLabel>
      {props.selectedTab === 'signin' ? 
      <AppButton type = "submit" >SIGN IN</AppButton> :
        <AppButton type = "submit" >SIGN UP</AppButton> }
  </AppContent>
    
);
}
