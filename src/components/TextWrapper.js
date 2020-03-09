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
    console.log(props.value)
    return <TextComponent>
        <Content>{props.name}</Content>
        {props.budgetValue ?
            <DefaultValue>{props.budgetValue}</DefaultValue> :
            null
        }
        <InputValue type="text" name={props.name} defaultValue={props.value} onKeyPress={handleKeyPress} id={props.id} onBlur={onBlurHandle} />
    </TextComponent>

}