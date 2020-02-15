import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../env/colors';
import CreateBudget from './createBudget';
import Subcategory from './subCategory';

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


export default function startBudget(props) {
    const [selectedTab, setSelectedTab] = useState('createCategory');
    const url = window.location.href;

    const parseURL = (data) => {
        var queryStart = data.indexOf("?") + 1,
            queryEnd = data.indexOf("#") + 1 || data.length + 1,
            query = data.slice(queryStart, queryEnd - 1),
            pairs = query.split("&"),
            cat = ((pairs[0].split("="))[1]).split(",");
           // subcat = (pairs[1].split("="))[1];
        return cat;
    }

    const changeTab = (dataFromChild) => {
        if (dataFromChild) {
            setSelectedTab("subcategory");
        }
    }

    useEffect(() => {
        if (String(parseURL(url)) !== "null") {
            setSelectedTab("subcategory");
        }
    })

    return (
        <BudgetWrapper>
            <TabBar>
                <TabButton selectedTab={selectedTab} name="category">create budget</TabButton>
                <TabButton selectedTab={selectedTab} name="subcategory">create subcategory</TabButton>
            </TabBar>
            <ContentBar>
                {selectedTab === "createCategory" ?
                    <CreateBudget changeTabCallback={changeTab} /> :
                    <Subcategory category={parseURL(url)}/>
                }
            </ContentBar>
        </BudgetWrapper>
    );
}