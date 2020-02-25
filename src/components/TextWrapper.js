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
        let type = e.target.id;
        if(value){
            setShowInputField(false)
            setInput(value);
        }
        let user_data = {
            value: value,
            name: name,
            type: type
        }
        props.onBlurCallback(user_data) 
    }
    const onHandleClick =()=>{
        setShowInputField(true)
    }

    return <TextComponent>
        <Content>{props.name}</Content>
        {props.showDefault ?
            <DefaultValue>{props.value}</DefaultValue> : 
            null
        }
        {showInputField ? 
            <InputValue type="text" name={props.name} onKeyPress={handleKeyPress} id={props.id} onBlur={onBlurHandle}/> :
            <DefaultValue onClick={onHandleClick}>{input}</DefaultValue>   
        }
    </TextComponent>

}