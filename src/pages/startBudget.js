import React, { useState} from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';
import AppCheckBox from '../components/AppCheckbox';
import SubmitButton from '../components/SubmitButton';
import AddButton from '../components/AddButton';
import AppText from '../components/AppText';
import ErrorBoundry from '../Error component/ErrorBoundry'
import DialogBox from '../components/DialogBox';
import db from '../env/firebase_config';


const size = {
    icon: {
        width: 40,
        height: 40
    },
    iconText: 30
}

const PageWrapper = styled.div`
    margin: auto;
    margin-top: 10%;
    top: 20%;
    padding: 2%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(50%, auto);
    grid-gap: 10px;
    border: none;
    width: 70%;
`;

const Header = styled.div``;
const ContentWrapper = styled.div`
    display : grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-gap: 5px
`;
const CheckList = styled.span`
    display: inline-block;
    padding: 20px
    width: 80%;
    height: 30%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
`;
const CheckboxLabel = styled.label``;
const ButtonWrapper = styled.div`
    display : grid;
    grid-template-columns: 50% 25% 25%;
    grid-gap: 5px;
`;
const AppTextArea = styled.div`
    width: 100%;
    height: 50px;
    rows = 4;
    columns = 50;
`;


export default function StartBudget() {
    const [showInput, setShowInput] = useState(false);
    const [iconList, setIconChecked] = useState([
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
    const [newCategory, setNewCategory] = useState(["veera","hi"]);
    const [showDialog, setShowDialog] = useState(false);
    const [title, setTitle] = useState();
    const checkboxChange = (e) => {
        iconList.map(icons => {
            if (icons.value === e.target.name) {
                icons.checked = e.target.checked;
            }
        })
        setIconChecked([...iconList])
    }

    const onHandle = (e) => {
        setShowInput(true);
    }

    const addNewCategoryCallBack = (dataFromChild) => {
        let newArray = newCategory.concat(dataFromChild);
        setNewCategory(newArray);
    }
    const deleteNewCategoryCallBack = (dataFromChild) => {
        let positionOfData = newCategory.indexOf(dataFromChild)
        newCategory.splice(positionOfData,1)
        setNewCategory(newCategory)
    }
    const saveAllCategory = () => {

    }
    const showDialogBox = async (e) => {
        var userId = db.getCurrentUser().uid;
        let title = await db.readData(userId);
        title ? console.log("title already created") : setShowDialog(!showDialog)
    }

    const handleDialogClose = () => {
        setShowDialog(false);
    }
    

    return (
        <>
        <DialogBox showDialog={showDialog} onClose={handleDialogClose} />
        <PageWrapper>
            <Header>Choose the Budget Category</Header>
            <ContentWrapper>
                {iconList.map((icons,index) => {
                    return (
                        <CheckList key = {index}>
                            <ErrorBoundry>
                                <CheckboxLabel>
                                    <AppCheckBox name={icons.value} checked={icons.checked} onChange={checkboxChange} />
                                    <Icon icon={icons.value}  width={size.icon.width} height={size.icon.height} />{icons.value}
                                </CheckboxLabel>
                            </ErrorBoundry>
                        </CheckList>
                    );
                })}
            </ContentWrapper>
            <ButtonWrapper>
                <AppTextArea>
                    {newCategory.map((value, index) =>
                        <AppText deleteNewCategory={deleteNewCategoryCallBack} key={index} value={value} />
                    )}
                </AppTextArea>
                <AddButton name="Add" addNewCategory={addNewCategoryCallBack} showInput={showInput} onClick={onHandle} />
                <SubmitButton name="Create Budget" onClick={showDialogBox}/>
            </ButtonWrapper>
        </PageWrapper>
        </>
    );
} 
