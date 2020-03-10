import React, { useState } from 'react';
import styled from 'styled-components';
import color from '../env/colors';
import Icon from '../components/Icon'

const TextComponent = styled.div`
    display: grid;
    grid-template-columns: 55% 20% 10% 5%;
    grid-gap: 10px;
    padding: 3px 10px;
`;
const Content = styled.div`
    padding-top: 5px; 
    padding-left: 10px;  
    font: 15px 'Quicksand', sans-serif ;
    color: ${color.grey.dark_grey} ; 
`;
const DefaultValue = styled.div`
    text-align: center;
    padding-top: 5px;
    font: 15px 'Quicksand', sans-serif ;
    color: ${color.grey.dark_grey} ;
`;
const InputValue = styled.input`
    padding-top: 5px;
    height: 20px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    border: none;
    border-bottom: 1px solid black;
    font: 15px 'Quicksand', sans-serif ;
    color: ${color.grey.dark_grey} ;
`;
const DeleteButton = styled.button`
    padding-top: 5px;
    text-align: center;
    background: none;
    border: none;
`;

export default function TextWrapper(props) {
    let input = props.value
    const [showInput, setShowInput] = useState(input);
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            let value = e.target.value;
            let name = e.target.name;
            props.callback(value, name)
        }
    }
    const onBlurHandle = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        let type = e.target.id;
        let user_data = {
            value: value,
            name: name,
            type: type
        }
        props.onBlurCallback(user_data)
    }
    const onHandleClick = () => {
        setShowInput(null)
    }

    return <TextComponent>
        <Content>{props.name}</Content>
        {props.budgetValue ?
            <DefaultValue>{props.budgetValue}</DefaultValue> :
            null
        }
        <InputValue type="text" name={props.name} defaultValue={props.value} onKeyPress={handleKeyPress} id={props.id} onBlur={onBlurHandle} />
        <DeleteButton>
            <Icon icon="Delete" color={color.grey.light_grey} width="30" height="30" /> 
        </DeleteButton>
    </TextComponent>

}