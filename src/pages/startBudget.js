import React, { useState } from 'react';
import styled from 'styled-components';
import DatabaseOperation from '../env/firebase_config'
import Icon from '../components/Icon';
import ErrorBoundry from '../Error component/ErrorBoundry'

const color = {
    dark: {
        Ming: "#006D77",
        DarkSalmon: "#E29578"
    },
    light: {
        MiddleBlueGreen: "#83C5BE",
        AliceBlue: "#EDF6F9",
        MistyRose: "#FFDDD2",
        White: "#ffffff"
    }
}
const size = {
    icon: {
        width: 50,
        height: 50
    },
    iconText: 30
}

const PageWrapper = styled.div`
    margin: 200px;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 10px;
    border-color: black;
    border-style: solid;
`;
const ButtonWrapper = styled.div`
    display : grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 100px;
    grid-gap: 10px; 
`;
const GridButton = styled.div`
    border-color: black;
    border-style: solid;
`;
const TextCategory = styled.div`
    border-color: black;
    border-style: solid;
`;


export default function StartBudget() {
   const iconList = ["House", "Car", "Food", "Utilities", "Clothing", "HealthCare", "Insurance", "HouseholdItems", "PersonalCare", "Debt","Education","Savings", "GiftsAndDonation","Entertainment","Addition"];

    return (
        <PageWrapper>
            <ButtonWrapper>
                {iconList.map((value,index) => {
                    return (
                        <GridButton key={index}>
                            <ErrorBoundry>
                            <Icon icon={value} color = {color.dark.Ming} width = {size.icon.width} height = {size.icon.height} />
                            </ErrorBoundry>
                        </GridButton>
                    );
                })}
            </ButtonWrapper> 
            <TextCategory />   
        </PageWrapper>
    );
}