import React,{useState} from 'react';
import styled from 'styled-components';
import color from '../env/colors';

const AddBox = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(50%, auto);
    width: 100%;
    height: 100%;
`;
const BoxButton = styled.button`
    background-color: ${color.grey.dark_grey};
    color: white;
    border: none;
    font: 17px 'Quicksand', sans-serif;
`;

const AddText = styled.input`
    float: right;  
    border: solid 1.5px ${color.grey.dark_grey};
    font: 14px 'Quicksand', sans-serif;
    color: ${color.grey.dark_grey}
`;

const ButtonComp = styled.button`
    width: 100%;
    height: 100%;
    background-color: ${color.grey.dark_grey};
    border: none;
    color: white;
    font: 17px 'Quicksand', sans-serif;
    padding: 15px;
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
                <BoxButton onClick = {addCategory}> Add </BoxButton>
            </AddBox>:
            <ButtonComp {...props} name={props.name} > Add new Category </ButtonComp>
        );
        
}    
export default AddButton;
