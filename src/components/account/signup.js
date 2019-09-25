import React from 'react';
import styled from 'styled-components';

const color = {
  basic: {
      black: '#000000',
      white: '#ffffff',
      halfwhite: '#EDF5E1'
  },
  lightgreen: {
      dark: '#5CDB95',
      light: '#8EE4AF'
  },
  darkgreen: {
      dark: '#05386B',
      light: '#379683'
  }
}

const AppContent = styled.form``;
const AppLabel = styled.label``;
const AppInput = styled.input``;
const AppButton = styled.button``;

export default function Signup() {
  return (
    <AppContent>
        <AppLabel>username</AppLabel>
        <AppInput type = "text" />
        <AppLabel>password</AppLabel>
        <AppInput type = "password" />
        <AppButton type = "submit">SIGN UP</AppButton>
    </AppContent>
      
  );
}