import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';
import AppCheckBox from '../components/AppCheckbox';
import SubmitButton from '../components/SubmitButton';
import AddButton from '../components/AddButton';
import AppTextArea from '../components/AppTextArea';
import ErrorBoundry from '../Error component/ErrorBoundry'
import DialogBox from '../components/DialogBox';
import db from '../env/firebase_config';
import color from '../env/colors'
import ReactDOM from 'react-dom';


const size = {
    icon: {
        width: 40,
        height: 40
    },
    iconText: 30
}

const PageWrapper = styled.div`
    margin: auto;
    margin-top: 5%;
    top: 20%;
    padding: 2%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(50%, auto);
    grid-gap: 20px;
    border: none;
    width: 45%;
`;

const Header = styled.div`
    font: 23px 'Quicksand', sans-serif;
    color: ${color.grey.dark_grey};
    padding-bottom: 2%;
`;
const ContentWrapper = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
`;


export default function StartBudget() {
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
    const [title, setTitle] = useState();

    const checkboxChange = (e) => {
        let value = String(e.target.name)
        let ischecked = checkedItems.concat(value)
        setCheckedItems(ischecked)
    }

    const onHandle = (e) => {
        setShowInput(true);
    }

    const addNewCategoryCallBack = (dataFromChild) => {
        let newArray = newCategory.concat(dataFromChild);
        setNewCategory(newArray);
    }
    const handleDeleteCategory = value => {
        setNewCategory(newCategory.filter(category => category !== value))
    }


    const saveAllCategory = async () => {
        let category = checkedItems.concat(newCategory)
        await db.createCategory(category)
    }
    const showDialogBox = async (e) => {
        if (checkedItems.length === 0 && newCategory.length === 0) {
            alert("select any category or type a category before proceeding");
        } else {
            var userId = db.getCurrentUser().uid;
            let title = await db.readTitle(userId);
            title ? saveAllCategory() : setShowDialog(!showDialog)
        }
    }

    const handleDialogClose = () => {
        setShowDialog(false);
        saveAllCategory();
    }


    return (
        <>
            <DialogBox showDialog={showDialog} onClose={handleDialogClose} />
            <PageWrapper>
                <Header>Choose the Budget Category</Header>
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
                    <AddButton name="Add" addNewCategory={addNewCategoryCallBack} showInput={showInput} onClick={onHandle} />
                    <SubmitButton name="Create Budget" onClick={showDialogBox} />
                </ButtonWrapper>
            </PageWrapper>
        </>
    );
} 
