import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../env/firebase_config';

const DialogBoxComp = styled.dialog`
    width: 20%;
    height: 10%;
    -webkit-backdrop-filter: rgba(57, 89, 121, 0.73);
    backdrop-filter: rgba(57, 89, 121, 0.73);
`;
const Label = styled.label``;
const Title = styled.input``;
const Button = styled.button`

`;


const DialogBox = (props) => {
    
    const [title, setTitle] = useState();

    const onHandle = (e) => {
        setTitle(e.target.value);
    }
    const createData = async (e) => {
        e.preventDefault();
        let result = await db.createTitle(title);
        if(result){
            props.onClose()
        }
    }
    return(
    <DialogBoxComp open={props.showDialog}>
        <form>
            <Label>Enter Title for Budget</Label>
            <Title onChange={onHandle}/>
            <Button onClick={createData}>Create Budget</Button>
        </form>
    </DialogBoxComp>
    );
}

export default DialogBox;