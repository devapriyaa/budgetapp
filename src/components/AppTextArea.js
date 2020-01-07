import React from 'react';
import AppText from './AppText'
import styled from 'styled-components';

const TextArea = styled.div`
    width: auto;
    height: 90px;  
    overflow: auto;
    row = 4;
    column = 10;
`;

const AppTextArea = (props) => {
    let value = props.value;    
    return(
    <TextArea id="app_text_area">
        {value.map((value, index) => {
            return <AppText className={"class_" + value + "_" + index} key={index} value={value} deleteNewCategory={props.onDeleteCategory} />
        }
        )}
    </TextArea>
    );
}
export default AppTextArea;