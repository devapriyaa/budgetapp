import React from 'react';
import styled from 'styled-components';

const ButtonComp = styled.button`
    width: 90%;
    height: 100%;
`;

const SubmitButton = (props) => (
    <ButtonComp {...props}>{props.name}</ButtonComp>
)
    
export default SubmitButton;
