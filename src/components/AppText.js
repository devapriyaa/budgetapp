import React from 'react';
import styled from 'styled-components';


const TextWrapper = styled.span`
    border-style: solid;
    border-width: 1px;
    border-color: black;
    padding: 5px 0 5px 10px;
`;
const Text = styled.span``;
const Cancel = styled.button`
    border : none;
`;

const AppText = (props) => {

    const deleteCategory= (e) => {
        if(e.target.value){
            props.deleteNewCategory(e.target.value);
        }
        
    }
    return (
        <TextWrapper>
            <Text>{props.value}</Text>
            <Cancel onClick={deleteCategory} value={props.value} >X</Cancel>
        </TextWrapper>
    );
}

export default AppText;