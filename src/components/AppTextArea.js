import React from 'react';
import styled from 'styled-components';

const TextAreaComp = styled.div`
    border: solid;
    border-color: black;
    width: 100%;
    height: 100%;
    rows = 4;
    columns = 50;
`;

const AppTextArea = (props) => (
    <TextAreaComp >{props.value}</TextAreaComp>
)

export default AppTextArea;