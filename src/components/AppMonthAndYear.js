import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const ComponentWrapper = styled.div`
    display: grid;
    grid-template-columns: 20% 60% 20%;
    width: 30%
`;
const Arrows = styled.button`
    text-align: center;
    margin: auto;
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


export default function AppMonthAndYear() {
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const [currentPageMonth, setCurrentPageMonth] = useState();
    const [currentPageYear, setCurrentPageYear] = useState();

    useEffect(() => {
        const getCurrentDate = () => {
            let Month = new Date().getMonth();
            let Year = new Date().getFullYear();
            setCurrentPageMonth(Month)
            setCurrentPageYear(Year);
        }
        getCurrentDate();
    }, []);

    const handleOnClick = (e) => {
        let value = parseInt(e.currentTarget.value)
        let name = e.currentTarget.name;
        setCurrentPageMonth(value);
        handleYear(value,name)
    }

    const handleYear = (value,name) => {
        let clickedMonth = months[value]
        let typeOfButton = name;
        if(clickedMonth === "DEC" && typeOfButton === "previous"){
            setCurrentPageYear(currentPageYear-1)
        }
        if(clickedMonth === "JAN" && typeOfButton === "next") {
            setCurrentPageYear(currentPageYear+1)
        }
    }

    const validateMonth = (value, type) => {
        let currentPage = currentPageMonth
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
            <Arrows value={validateMonth(currentPageMonth, "previous")} name = "previous" onClick = {handleOnClick}>
                <Icon icon="Less_than" color="black" width="30" height="30" />
            </Arrows>
            <DateWrapper>
                <Year>{currentPageYear}</Year>
                <MonthWrapper>
                    <Month value={validateMonth(currentPageMonth, "previous")} name = "previous" onClick={handleOnClick}>{months[validateMonth(currentPageMonth, "previous")]}</Month>
                    <Month big_text="true">{months[currentPageMonth]}</Month>
                    <Month value={validateMonth(currentPageMonth, "next")} name = "next" onClick={handleOnClick}>{months[validateMonth(currentPageMonth, "next")]}</Month>
                </MonthWrapper>
            </DateWrapper>
            <Arrows value={validateMonth(currentPageMonth, "next")} name = "next" onClick={handleOnClick}>
                <Icon icon="Greater_than" color="black" width="30" height="30" />
            </Arrows>
        </ComponentWrapper>
    );
}