import React from 'react';
import styled from 'styled-components';
import color from '../env/colors';

const ButtonComp = styled.button`
    width: 90%;
    height: 100%;
    background-color: ${color.grey.dark_grey};
    border: none;
    color: white;
    font: 17px 'Quicksand', sans-serif;
    padding: 15px;
`;

const SubmitButton = (props) => (
    <ButtonComp {...props}>{props.name}</ButtonComp>
)
    
export default SubmitButton;
