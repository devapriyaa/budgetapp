import React, { useState } from 'react';
import styled from 'styled-components';

const TextComponent = styled.div`
    display: grid;
    grid-template-columns: 60% 20% 20%;
`;
const Content = styled.div``;
const DefaultValue = styled.div``;
const InputValue = styled.input``;


export default function TextWrapper(props) {
    const [showInputField, setShowInputField] = useState(true);
    const [input, setInput] = useState();

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            let value = e.target.value;
            let name = e.target.name;
            setShowInputField(false)
            setInput(value);
            props.callback(value,name)
        }
    }
    const onBlurHandle = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setShowInputField(false)
        setInput(value);
        props.callback(value,name) 
    }
    const onHandleClick =()=>{
        setShowInputField(true)
    }

    return <TextComponent>
        <Content>{props.name}</Content>
        {props.defaultValue ?
            <DefaultValue>{props.defaultValue}</DefaultValue> : 
            null
        }
        {showInputField ? 
            <InputValue type="text" name={props.name} onKeyPress={handleKeyPress} onBlur={onBlurHandle}/> :
            <DefaultValue onClick={onHandleClick}>{input}</DefaultValue>   
        }
    </TextComponent>

}