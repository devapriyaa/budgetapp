import React,{useState} from 'react';
import styled from 'styled-components';

const AddBox = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(50%, auto);
    width: 100%;
    height: 100%;
`;
const BoxButton = styled.button`

`;

const AddText = styled.input`
    float: right;  
`;

const ButtonComp = styled.button`
    width: 100%;
    height: 100%;
    
`;

function AddButton (props) {
    const [newCategory, setNewCategory] = useState();

    const handleChange = (e) => {
        setNewCategory(e.target.value)
    }

    const addCategory = (e) => {
        props.addNewCategory(newCategory)
        
    }

    return( props.showInput ? 
        
            <AddBox>
                <AddText onChange={handleChange}/>
                <BoxButton onClick = {addCategory}> + </BoxButton>
            </AddBox>:
            <ButtonComp {...props} name={props.name} > Add new Category </ButtonComp>
        );
        
}    
export default AddButton;
