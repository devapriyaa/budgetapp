import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../env/colors';
import CreateBudget from './createBudget';

const BudgetWrapper = styled.div`
    margin-top: 100px;
    margin-left: 200px;
    margin-right: 200px;
    width: 70%;
`;
const TabBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
const TabButton = styled.span`
    display: inline-block;  
    height: 40px;
    position: relative;
    line-height: 2.5em;
    padding-top: 1em;
    padding-left: 1em;
    padding-right: 2em;
    background: ${props => props.selectedTab === "createCategory" && props.name === "category" ?
        colors.grey.dark_grey : colors.grey.light_grey};
    color: white;
    font: 17px 'Quicksand',sans-serif;
`;

const ContentBar = styled.div`
    border: 5px solid ${colors.grey.dark_grey};
`;
const BudgetContent = styled.form``;


export default function startBudget(props){
    const [selectedTab,setSelectedTab] = useState('createCategory');
    function Budget () {
        return(<h1>hi</h1>)
    }
    const changeTab = (dataFromChild) =>{
        if(dataFromChild){
            setSelectedTab("subcategory");
        }
    }
    return(
        <BudgetWrapper>
            <TabBar>
                <TabButton selectedTab={selectedTab} name="category">create budget</TabButton>
                <TabButton selectedTab={selectedTab} name="subcategory">create subcategory</TabButton>
            </TabBar>
            <ContentBar>
                {selectedTab === "createCategory" ?
                    <CreateBudget changeTabCallback={changeTab}/> :
                    <h1> hi </h1>
                } 
            </ContentBar>
        </BudgetWrapper>
    );  
}