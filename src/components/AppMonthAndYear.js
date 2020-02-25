import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const ComponentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    width: 100%
`;
const Arrows = styled.button`
    text-align: center;
    margin: auto;
    border: none;
    background: none;
`;
const DateWrapper = styled.div`
    display: grid;
    grid-template-rows: 50% 50%;
`;
const Year = styled.div`
    font: 17px 'Quicksand', sans-serif;
    line-height: 50px;
    height: 50px;
    text-align: center;
    vertical-align: middle;  
`;
const MonthWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
const Month = styled.button`
    width: 100%;
    height: 50px;
    font: ${props => props.big_text ? "30px" : "17px"} 'Quicksand', sans-serif;
    border: none;
    background: none;
`;


export default function AppMonthAndYear(props) {
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let month = props.currentDate[0];
    let year = props.currentDate[1];

    const callbackFromChild = (date) => {
        props.onGetCurrentPageDate(date);
    }

    const handleOnClick = (e) => {
        let value = parseInt(e.currentTarget.value)
        let clickedMonth = months[value]
        let typeOfButton = e.currentTarget.name;
        if(typeOfButton === "previous"){
           if(clickedMonth === "DEC" ) {
                let date = {
                month : value,
                year : year-1 
            }
                callbackFromChild(date)
           }else{
               let date ={
                   month : value,
                   year: year
               }
               callbackFromChild(date)
           }
        }
        if(typeOfButton === "next"){
            if(clickedMonth === "JAN" ) {
                let date = {
                month : value,
                year : year+1 
            }
            callbackFromChild(date)
           }else{
               let date ={
                   month : value,
                   year: year
               }
               callbackFromChild(date)
           }
        }
    }
    const validateMonth = (value, type) => {
        let currentPage = month
        if (type === "previous") {
            let previousPage = currentPage - 1;
            if (previousPage < 0) {
                return 11; 
            } else {
                return previousPage;
            }
        } else {
            let nextPage = currentPage + 1;
            if (nextPage > 11) {
                return 0;
            }
            else {
                return nextPage;
            }
        }
    }


    return (
        <ComponentWrapper>
            <Arrows value={validateMonth(month, "previous")} name = "previous" onClick = {handleOnClick}>
                <Icon icon="Less_than" color="black" width="30" height="30" />
            </Arrows>
            <DateWrapper>
                <Year>{year}</Year>
                <MonthWrapper>
                    <Month value={validateMonth(month, "previous")} name = "previous" onClick={handleOnClick}>{months[validateMonth(month, "previous")]}</Month>
                    <Month big_text="true">{months[month]}</Month>
                    <Month value={validateMonth(month, "next")} name = "next" onClick={handleOnClick}>{months[validateMonth(month, "next")]}</Month>
                </MonthWrapper>
            </DateWrapper>
            <Arrows value={validateMonth(month, "next")} name = "next" onClick={handleOnClick}>
                <Icon icon="Greater_than" color="black" width="30" height="30" />
            </Arrows>
        </ComponentWrapper>
    );
}