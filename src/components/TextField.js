import React, {useState} from 'react';
import styled from 'styled-components';
import color from '../env/colors';
import MenuButton from '../components/MenuButton';

const TextFieldWrapper = styled.div`
    display: grid;
    grid-template-columns: 60% 30% 10%; 
    margin: auto;
    width: 80%;
    margin-top: 10px;
`;
const SubCategoryName = styled.input`
    border: none;
    height: 50px;
    width: 90%
`;
const SubCategoryValue = styled.input`
    border: none;
    height: 50px;
    width: 70%; 
`;

function TextField(prop) {

    const onChange =(e) =>{
        let index = prop.index
        let name = e.target.name === "name" ? e.target.value : null;
        let value = e.target.name === "value" ? e.target.value : null;
        prop.callback(index, name,value);
    }
    
    return (
        <TextFieldWrapper>
            <SubCategoryName id="textInput1" name="name" onBlur={onChange}/>
            <SubCategoryValue id="textInput2" name="value" onBlur={onChange}/>
        </TextFieldWrapper>
    )
}
export default TextField;