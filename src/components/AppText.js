import React from 'react';
import styled from 'styled-components';
import color from '../env/colors';

const TextWrapper = styled.span`
    display: inline-block;
    width: auto;
    border-style: solid;
    border-width: 1px;
    border-color: ${color.grey.dark_grey};
    padding: 3px 0 3px 10px;
    margin: 2px;
`;
const Text = styled.span`
    font: 13px 'Quicksand', sans-serif;
    color: ${color.grey.dark_grey}
`;
const Cancel = styled.button`
    font: 13px 'Quicksand', sans-serif;
    border : none;
    color: ${color.grey.dark_grey}
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