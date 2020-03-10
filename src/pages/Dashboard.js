import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import db from '../env/firebase_config';
import color from '../env/colors';
import AppMonthPagination from '../components/AppMonthAndYear';
import TextWrapper from '../components/TextWrapper';
import Icon from '../components/Icon';


const PageWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-gap:10px;
`;
const CurrentPageMenu = styled.div``;
const DatePagination = styled.div`
    margin: auto;
`;
const BudgetWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 10px;
`;
const Holding = styled.div`
    border: 1px solid;
`;
const Spending = styled.div`
    border: 1px solid;
`;
const CategoryWrapper = styled.div`
    display: grid;
    grid-template-rows: auto;
    width: 40%;
    margin: auto
    border: 1.5px solid ${color.grey.light_grey};
    border-radius: 5px;
    overflow: visible;
`;
const Category = styled.div`
    height: auto;
    display : grid
    grid-template-columns: 55% 20% 10% 5%;
    grid-gap: 10px;
    padding: 3px 10px;
`;
const MenuButton = styled.button`
    padding-top: 10px;
    border: none;
    background: none;
    &:active{
        outline: none;
    }
    &:focus {outline:0;}
`;

const CategoryName = styled.button`
    text-align: left;
    font: 20px 'Quicksand', sans-serif ;
    color: ${color.grey.dark_grey}  
    background: none;
    border: none
    &:active{
        outline: none;
    }
    &:focus {outline:0;}
`;

const SubTitle = styled.div`
    text-align: center;
    font: 15px 'Quicksand', sans-serif ;
    color: ${color.grey.light_grey} ;
    padding: 10px;
`;
const SubcategoryWrapper = styled.div`
    border: none;
    display: grid;
    grid-template-rows: auto;
    height: ${p => p.showSubcategory ? 'auto' : '0px'};
    display: ${p => p.showSubcategory ? 'inline' : 'hidden'};
`;
const SumbitButton = styled.button`
    width: 40%;
    height: 50px;
    margin: 0 auto;
    border: 1.5px solid ${color.grey.light_grey};
    border-radius: 5px;
    font: 20px 'Quicksand', sans-serif ;
    color: ${color.grey.dark_grey}  
`;


export default function Dashboard() {
    const [budgetData, setCategory] = useState([]);
    const [userData, setUserData] = useState([]);
    const [currentPageDate, setCurrentPageDate] = useState([]);
    let arrayOfBudgetCategory = (Object.values(budgetData))[0];
    let arrayOfBudgetSubcategory = (Object.values(budgetData))[1];
    const [showSubcategory, setShowSubcategory] = useState(false);
    const [clickedCategory, setClickedCategory] = useState([]);


    const getDetails = async (userID, date) => {
        let categoryDetails = await db.getCategoryDetails(userID);
        let subcategoryDetails = await db.getSubcategoryDetails(userID);
        if (categoryDetails && subcategoryDetails) {
            setCategory({
                category: categoryDetails,
                subcategory: subcategoryDetails
            });
        };
    }
    const getUserDetails = async (userID, date) => {
        let userdata = await db.getUserContent(userID, date.join(':'));
        if (userdata) {
            let data = Object.values(userdata)[0]
            let sub_data = Object.values(data)[0];
            let tracking_data = Object.values(data)[1];
            if (sub_data && tracking_data) {
                console.log("user data available")
                setUserData({
                    userSubData: sub_data,
                    userTrackingData: tracking_data
                })
            } else {
                console.log("no data")
                setUserData({
                    userSubData: null,
                    userTrackingData: null
                })
            }
        }
    }
    const dateCallBackParent = async (props) => {
        let result = await db.signedUser();
        if (result) {
            let userID = db.getCurrentUser().uid;
            let date = (Object.values(props))

            setCurrentPageDate(date)
            getDetails(userID, date)
            getUserDetails(userID, date);

        }
    }

    const findIndex = (data, name) => {
        let givenData = Object.values(data);
        let result = givenData.map(item => {
            let result = item.includes(name)
            return result;
        })
        return (result.includes(true) ? result.indexOf(true) : -1)
    }

    const getElement = (name, type) => {
        let data = userData;
        if (data) {
            let sub_data = (Object.values(data))[0]
            let tracking_data = (Object.values(data))[1]
            if ("tracking_data" === type) {
                if (tracking_data) {
                    let value = tracking_data.map(data => {
                        if (data.includes(name)) {
                            return (data[1])
                        }
                    })
                    return (value.find(element => element > 0))
                }
            }
            if ("sub_data" === type) {
                if (sub_data) {
                    let value = sub_data.map(data => {
                        if (data.includes(name)) {
                            return (data[1])
                        }
                    })
                    return (value.find(element => element > 0))
                }
            }
        }
    }

    const inputCallBackFromParent = async (props) => {
        let user_data = Object.values(props);
        let value = user_data[0];
        let name = user_data[1];
        let type = user_data[2];
        let userSubData = (Object.values(userData))[0];
        let userTrackingData = (Object.values(userData))[1];
        if (type === "sub_data") {
            if (value) {
                if (userSubData === null) {
                    let userSubData = ([[name, value]])
                    let data = {
                        subData: userSubData,
                        trackingData: userTrackingData
                    }
                    setUserData(data)
                    console.log("creating new data")
                } else {
                    let index = (findIndex(userSubData, name));
                    if (index > -1) {
                        let duplicateArray = userSubData.slice();
                        let newData = [name, value]
                        duplicateArray.splice(index, 1, newData)
                        let data = {
                            subData: duplicateArray,
                            trackingData: userTrackingData
                        }
                        setUserData(data);
                        console.log("replaced")
                    } else {
                        console.log("adding to old array");
                        userSubData.push([name, value]);
                        let data = {
                            subData: userSubData,
                            trackingData: userTrackingData
                        }
                        setUserData(data)
                    }
                }

            }
        } else {
            if (value) {
                if (userTrackingData === null) {
                    let userTrackingData = ([[name, value]])
                    let data = {
                        subData: userSubData,
                        trackingData: userTrackingData
                    }
                    setUserData(data)
                    console.log("creating new data")
                }
            }
            else {
                let index = (findIndex(userTrackingData, name));
                if (index > -1) {
                    let duplicateArray = userTrackingData.slice();
                    let newData = [name, value]
                    duplicateArray.splice(index, 1, newData)
                    let data = {
                        subData: userSubData,
                        trackingData: duplicateArray
                    }
                    setUserData(data);
                    console.log("replaced")
                } else {
                    console.log("adding to old array");
                    userTrackingData.push([name, value]);
                    let data = {
                        subData: userSubData,
                        trackingData: userTrackingData
                    }
                    setUserData(data)
                }
            }
        }
    }

    const handleOnClickSubcategory = (e) => {
        let name = e.target.innerText
        if (clickedCategory.includes(name)) {
            let index = clickedCategory.findIndex(element => element === name);
            clickedCategory.splice(index, 1)
            setClickedCategory(clickedCategory)
            setShowSubcategory(false)
        } else {
            setClickedCategory([...clickedCategory, name]);
            setShowSubcategory(true)
        }
    }
    const handleOnClickSubmit = async () => {
        let userID = db.getCurrentUser().uid;
        let currentDate = currentPageDate.join(':')
        let currentDateValue = await db.getUserContent(userID, currentDate)
        if (currentDateValue) {
            //adds new values to the list
            if ((Object.values(userData)[0].length) > 0 || (Object.values(userData)[1].length) > 0) {
                let result = await db.updateUserContent(userID, userData, currentDate);
                if (result) {
                    console.log("content updated");
                }
            }
        } else {
            if ((Object.values(userData)[0].length) > 0 || (Object.values(userData)[1].length) > 0) {
                let result = await db.createUserContent(userID, userData, currentDate);
                if (result) {
                    console.log("content stored")
                }
            }
        }
    }
    return (
        <PageWrapper>
            <CurrentPageMenu>print</CurrentPageMenu>
            <BudgetWrapper>
                <Holding>
                    <TextWrapper name="Earning" id="tracking_data" value={getElement("Earning", "tracking_data") ? getElement("Earning", "tracking_data") : null} onBlurCallback={inputCallBackFromParent} />
                    <TextWrapper name="Saving" id="tracking_data" value={getElement("Saving", "tracking_data") ? getElement("Saving", "tracking_data") : null} onBlurCallback={inputCallBackFromParent} />
                </Holding>
                <DatePagination>
                    <AppMonthPagination onGetCurrentPageDate={dateCallBackParent} />
                </DatePagination >
                <Spending>
                    <TextWrapper name="Budget" id="tracking_data" value={getElement("Budget", "tracking_data") ? getElement("Budget", "tracking_data") : null} onBlurCallback={inputCallBackFromParent} />
                    <TextWrapper name="Spent" id="tracking_data" value={getElement("Spent", "tracking_data") ? getElement("Spent", "tracking_data") : null} onBlurCallback={inputCallBackFromParent} />
                </Spending>
            </BudgetWrapper>

            {arrayOfBudgetCategory ? arrayOfBudgetCategory.map((item, catindex) => {
                return <CategoryWrapper key={catindex}>
                    <Category >
                        <CategoryName onClick={handleOnClickSubcategory}>{Object.values(item)}</CategoryName>
                        <SubTitle>Budgeted</SubTitle>
                        <SubTitle>Spent</SubTitle>
                        <MenuButton>
                            <Icon icon={"Menu"} color={color.grey.dark_grey} width="30" height="30" />
                        </MenuButton>
                    </Category>
                    <SubcategoryWrapper showSubcategory={showSubcategory}>
                        {(arrayOfBudgetSubcategory) ?
                            clickedCategory.map(element => {
                                if (element === item) {
                                    return arrayOfBudgetSubcategory.map((subcategory, subindex) => {
                                        if ((Object.values(subcategory))[0] === catindex) {
                                            let data = ((Object.values(subcategory))[1])
                                            return <TextWrapper
                                                name={data[0]}
                                                id="sub_data"
                                                value={(getElement(data[0], "sub_data")) ? (getElement(data[0], "sub_data")) : null}
                                                budgetValue={data[1]}
                                                onBlurCallback={inputCallBackFromParent}
                                            />
                                        } else {
                                            return null;
                                        }
                                    })
                                } else {
                                    return null;
                                }
                            }) : null}
                    </SubcategoryWrapper>
                </CategoryWrapper>
            }) : null
            }
            <SumbitButton onClick={handleOnClickSubmit}>Sumbit</SumbitButton>
        </PageWrapper>
    );
}