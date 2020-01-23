import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AppCheckBox from '../components/AppCheckbox';
import SubmitButton from '../components/SubmitButton';
import AddButton from '../components/AddButton';
import AppTextArea from '../components/AppTextArea';
import ErrorBoundry from '../Error component/ErrorBoundry'
import DialogBox from '../components/DialogBox';
import db from '../env/firebase_config';
import color from '../env/colors'
import Icon from '../components/Icon';


const size = {
    icon: {
        width: 40,
        height: 40
    },
    iconText: 30
}

const PageWrapper = styled.div`
    padding: 2%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(50%, auto);
    grid-gap: 20px;
    border: none;
    width: 90%;
    margin: auto;
`;

const Header = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    padding-bottom: 2%;
`;

const TitleElm = styled.input`
    border: none;
    background: none;
    width: 100%;
    font: 25px 'Quicksand',sans-serif;
`;

const ContentWrapper = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px
`;
const CheckList = styled.div`
    position: relative;
    height: auto;
    box-shadow: 0.3em 0.3em 0.7em rgba(0,0,0,0.3), inset 2px 2px 0px ${color.grey.dark_grey};
    text-align: center;
    padding: 20px;
    min-width: 100px;
`;
const CheckBox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;
const CheckboxLabel = styled.div`
    text-align: center;
    h4{
        margin: 0;
        font: 15px 'Quicksand', sans-serif;
        color: ${color.grey.dark_grey};
    }
`;
const ButtonWrapper = styled.div`
    display : grid;
    grid-template-columns: 50% 25% 25%;
    grid-gap: 5px;
`;

const IconName = styled.h4`
    font: 17px 'Quicksand',sans-serif;
`;


export default function createBudget(props) {
    const [showInput, setShowInput] = useState(false);
    const [iconList, setItems] = useState([
        { value: "House", checked: false },
        { value: "Car", checked: false },
        { value: "Food", checked: false },
        { value: "Utilities", checked: false },
        { value: "Clothing", checked: false },
        { value: "HealthCare", checked: false },
        { value: "Insurance", checked: false },
        { value: "Household", checked: false },
        { value: "Personal", checked: false },
        { value: "Debt", checked: false },
        { value: "Education", checked: false },
        { value: "Savings", checked: false },
        { value: "Gifts", checked: false },
        { value: "Entertainment", checked: false },
        { value: "Misc", checked: false }]);
    const [checkedItems, setCheckedItems] = useState([]);
    const [newCategory, setNewCategory] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [title, setTitle] = useState(null);

    const checkboxChange = (e) => {
        let value = String(e.target.name)
        let ischecked = checkedItems.concat(value)
        setCheckedItems(ischecked)
    }

    const onClickAdd = (e) => {
        setShowInput(true);
    }

    const addNewCategoryCallBack = (dataFromChild) => {
        let newArray = newCategory.concat(dataFromChild);
        setNewCategory(newArray);
    }
    const handleDeleteCategory = value => {
        setNewCategory(newCategory.filter(category => category !== value))
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }
    
    const onClickSumbit =()=> {
        if(title === null){
            alert("Enter the title for your project first");
        }
        else if (checkedItems.length === 0 && newCategory.length === 0){
            alert("select any category or type a category before proceeding");
        }else {
            //var userId = db.getCurrentUser().uid;
            //let title = await db.readTitle(userId);
            saveAllCategory();
        }
    }

    const handleDialogClose = () => {
        setShowDialog(false);
        saveAllCategory();
    }
    const saveAllCategory = async () => {
        if(title){
            await db.createTitle(title);
            let category = checkedItems.concat(newCategory);
            if(category){
                await db.createCategory(category);
            }
        }
        props.changeTabCallback(true)
    }

    return (
        <>
            <DialogBox showDialog={showDialog} onClose={handleDialogClose} />
            <PageWrapper>
                <Header> 
                    <TitleElm value={title ? title : null } placeholder="Enter the title for your project" onChange={onTitleChange}/>
                    <Icon icon="Edit" color={color.grey.dark_grey} width={size.icon.width} height={size.icon.height}/>
                </Header>
                <ContentWrapper>
                    {iconList.map((icons, index) => {
                        return (
                            <CheckList key={index}>
                                <ErrorBoundry>
                                    <CheckBox>
                                        <AppCheckBox 
                                            name={icons.value} 
                                            checked={checkedItems.includes(icons.value)} 
                                            onChange={checkboxChange} />
                                    </CheckBox>
                                   
                                    <CheckboxLabel>
                                        <Icon icon={icons.value} color={color.grey.dark_grey} width={size.icon.width} height={size.icon.height} />
                                        <IconName>{icons.value}</IconName>
                                    </CheckboxLabel>
                                </ErrorBoundry>
                            </CheckList>
                        );
                    })}
                </ContentWrapper>
                <ButtonWrapper>
                    <AppTextArea value={newCategory} onDeleteCategory={handleDeleteCategory} />
                    <AddButton name="Add" addNewCategory={addNewCategoryCallBack} showInput={showInput} onClick={onClickAdd} />
                    <SubmitButton name="Create Budget" onClick={onClickSumbit} />
                </ButtonWrapper>
            </PageWrapper> 
            
        </>
    );
} 
