import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import db from '../env/firebase_config';
import color from '../env/colors';
import TextWrapper from '../components/TextWrapper';

const PageWrapper = styled.div`
    border: 1px solid;
    display: grid;
    grid-template-rows: 1fr;
`;
const CurrentPageMenu = styled.div``;
const DatePagination = styled.div``;
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

export default function Dashboard() {
    const [category, setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [currentPageDate, setCurrentPageDate] = useState([]);

    const getCurrentDate =()=>{
        
    }

    useEffect(() => {
        async function getDetails() {
            let userID = db.getCurrentUser().uid;
            let categoryDetails = await db.getCategoryDetails(userID);
            let subcategoryDetails = await db.getSubcategoryDetails(userID);
            if (categoryDetails) {
                setCategory(categoryDetails);
            };
            if (subcategoryDetails) {
                setSubcategory(subcategoryDetails);
            }
        }
        getDetails();
        getCurrentDate();
    }, [])

    const callBackParent = (props) => {
        
    }


    return (
        <PageWrapper>
            <CurrentPageMenu>print</CurrentPageMenu>
            <DatePagination>{currentPageDate}</DatePagination>
            <BudgetWrapper>
                <Holding>
                    <TextWrapper name="Earning" callback = {callBackParent}/>
                    <TextWrapper name="Saving" />
                </Holding>
                <Spending>
                    <TextWrapper name="Budget" />
                    <TextWrapper name="Spent" />
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
                                    <TextWrapper name={subcategories[0]} defaultValue={subcategories[1]} />
                                </SubcategoryName>
                            }
                        })}
                    </SubcategoryWrapper>
                </CategoryWrapper>
            })}
        </PageWrapper>
    );
}