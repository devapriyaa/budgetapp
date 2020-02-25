import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import db from '../env/firebase_config';
import color from '../env/colors';
import TextWrapper from '../components/TextWrapper';
import AppMonthPagination from '../components/AppMonthAndYear';

const PageWrapper = styled.div`
    border: 1px solid;
    display: grid;
    grid-template-rows: 1fr;
`;
const CurrentPageMenu = styled.div``;
const DatePagination = styled.div`
    margin: auto;
`;
const BudgetWrapper = styled.div`
    display: grid;
    grid-template-areas: 'Holding Spending';
    grid-gap: 10px;
    padding: 10px;
`;
const Holding = styled.div``;
const Spending = styled.div``;
const CategoryWrapper = styled.div`
    border: 1px solid;
`;
const CategoryName = styled.div`
    background: ${color.grey.dark_grey};
`;
const SubcategoryWrapper = styled.div`
    border: 1px solid;
    display: grid;
    grid-template-rows: 1fr;
`;
const SubcategoryName = styled.div`
   background : ${props => props.subItemIndex % 2 === 0 ? color.grey.dark_grey : color.grey.light_grey}
`;
const SumbitButton = styled.button``;

export default function Dashboard() {
    const [category, setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [currentPageDate, setCurrentPageDate] = useState([]);
    const [userSubData, setUserSubData] = useState([]);
    const [userTrackingData, setUserTrackingData] = useState([]);

    const getDetails = async (prop) => {
        let userID = prop;
        let categoryDetails = await db.getCategoryDetails(userID);
        let subcategoryDetails = await db.getSubcategoryDetails(userID);
        let Month = new Date().getMonth();
        let Year = new Date().getFullYear();
        setCurrentPageDate([Month, Year])
        if (categoryDetails) {
            setCategory(categoryDetails);
        };
        if (subcategoryDetails) {
            setSubcategory(subcategoryDetails);
        }
    }

    useEffect(() => {
        async function intialize() {
            let result = await db.signedUser();
            if (result) {
                let userID = db.getCurrentUser().uid;
                getDetails(userID);
            }
        }
        intialize()
    }, [])

    const findValue = (name) => {
        userSubData.map((item, index) => {
            if (item.includes(name)) {
                return true;
            } else {
                return false;
            }
        });
    }

    const dateCallBackParent = (props) => {
        let date = props;
        setCurrentPageDate(Object.values(date))
    }
    const inputCallBackFromParent = async (props) => {
        // let userID = db.getCurrentUser().uid;
        // let result = await db.createContent(userID,currentPageDate);
        // if(result){

        // }
        let user_data = Object.values(props);
        let sub_data = user_data[2];
        if (sub_data === "sub_data") {
            let name = user_data[1];
            let value = user_data[0];

            if (value) {
                let newData = [name, value]
                if (userSubData.length < 1) {
                    let newArray = userSubData.concat([newData])
                    setUserSubData(newArray)
                    console.log("createing new array")
                } else {
                    let index = userSubData.findIndex(element => element[0] === name)
                    if (index > -1) {
                        let newArray = userSubData.slice();
                        newArray.splice(index, 1, newData)
                        setUserSubData(newArray);
                        console.log("replaced")
                    } else {
                        console.log("adding to old array");
                        let newArray = userSubData.concat([newData])
                        setUserSubData(newArray)
                    }
                }
            }
        } else {
            let newData = [user_data[0], user_data[1]]
            let newArray = userSubData.concat(newData)
            setUserTrackingData([newArray])
        }
    }
    console.log(userSubData)
    return (
        <PageWrapper>
            <CurrentPageMenu>print</CurrentPageMenu>
            <DatePagination>
                <AppMonthPagination onGetCurrentPageDate={dateCallBackParent} currentDate={currentPageDate} />
            </DatePagination>
            <BudgetWrapper>
                <Holding>
                    <TextWrapper name="Earning" onBlurCallback={inputCallBackFromParent} />
                    <TextWrapper name="Saving" onBlurCallback={inputCallBackFromParent} />
                </Holding>
                <Spending>
                    <TextWrapper name="Budget" onBlurCallback={inputCallBackFromParent} />
                    <TextWrapper name="Spent" onBlurCallback={inputCallBackFromParent} />
                </Spending>
            </BudgetWrapper>
            {category.map(item => {
                let numberOfSubcategory = 0;
                return <CategoryWrapper>
                    <CategoryName>{item}</CategoryName>
                    <SubcategoryWrapper>
                        {subcategory.map((subItem, index) => {
                            if (category.indexOf(item) === subItem.categoryNo) {
                                let subcategories = subItem.subcategory;
                                ++numberOfSubcategory;
                                return <SubcategoryName subItemIndex={numberOfSubcategory}>
                                    <TextWrapper name={subcategories[0]} id="sub_data" showDefault={true} value={subcategories[1]} onBlurCallback={inputCallBackFromParent} />
                                </SubcategoryName>
                            }
                        })}
                    </SubcategoryWrapper>
                </CategoryWrapper>
            })}
            <SumbitButton>Sumbit</SumbitButton>
        </PageWrapper>
    );
}