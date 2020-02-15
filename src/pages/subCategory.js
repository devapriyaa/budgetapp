import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextField from '../components/TextField';
import Colors from '../env/colors';
import ICONS from '../env/ICONS';
import Icon from '../components/Icon';
import db from '../env/firebase_config';

const PageWrapper = styled.div`
    display: grid;
    height: 600px
    grid-template-columns: 25% 75%;
    width: 100%
    border: none;
`;
const ContentWrapper1 = styled.div`
    display: inline-block;
    position: relative; 
    
    background: ${Colors.grey.dark_grey}
`;
const ContentWrapper2 = styled.div`
    display: inline-block;
    position: relative;  
`;
const TabWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr;
`;
const ContentTab = styled.button`
    display: inline-block;
    border: 1px solid;
    padding: 10px;
    font: 20px 'Quicksand', sans-serif;
    color: white;
    background:${Colors.grey.dark_grey};
    border: none;
    &:hover  {
        background  : ${Colors.grey.light_grey};
    }
`;

const AddButton = styled.button`
    height: 50px;
    width: 80px;
    padding: 12px;
    border: none;
    background: ${Colors.grey.dark_grey};
    position: absolute;
    top: 85%;
    left: 65% ;
    transform: translate(-50%, -50%);
`;

const CreateButton = styled.button`
    width: auto;
    font: 20px 'Quicksand', sans-serif;
    color: white;
    padding: 12px;
    border: none;
    background: ${Colors.grey.dark_grey};
    position: absolute;
    top: 85%;
    left: 85%;
    transform: translate(-50%, -50%);
    `;

export default function subCategory(props) {

    const category = props.category;
    const [subcategories, setSubcategories] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [newName, setNewName] = useState("");
    const [newValue, setNewValue] = useState("");

    const onTabClick = (e) => {
        let tabNumber = category.indexOf(e.target.name)
        setSelectedTab(tabNumber)
    }

    const updataSubcategory = (index, name, value) => {
        if (name !== null) {
            setNewName([index, name]);
        }
        if (value !== null) {
            setNewValue([index, value]);
        }
    }
    const addToSubcategories = () => {
        if (newName !== "" && newValue !== "") {
            if (newName[0] === newValue[0]) {
                let newSubcategory = { "categoryNo": selectedTab, "subcategory": [newName[1], newValue[1]] };
                setSubcategories(subcategories.concat(newSubcategory));
                resetTextField();
            }
        }
    }

    const onClickCreate = async () => {
        let userid = db.getCurrentUser().uid;
        if(subcategories){
            await db.createSubcategory(userid, subcategories)
        }
    }
    const resetTextField = () => {
        setNewValue("");
        setNewName("");
        document.getElementById("textInput1").value = "";
        document.getElementById("textInput2").value = "";
    }

    return (
        <PageWrapper>
            <ContentWrapper1>
                <TabWrapper>
                    {category.map((items, index) => {
                        return (
                            <ContentTab name={items} onClick={onTabClick}>{items}</ContentTab>);
                    })}
                </TabWrapper>
            </ContentWrapper1>
            <ContentWrapper2>
                <TextField index={selectedTab} callback={updataSubcategory} />
                <AddButton onClick={addToSubcategories}><Icon icon="Add" color="white" width="40" height="40" /></AddButton>
                {subcategories.map((item, index) => {
                    if (item.categoryNo === selectedTab) {
                        return <h4>{item.subcategory}</h4>
                    }
                })}
                <CreateButton onClick={onClickCreate}> Create </CreateButton>
            </ContentWrapper2>
        </PageWrapper >
    );
}