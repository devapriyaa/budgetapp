import React from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.div``;
const Year = styled.div``;
const Month = styled.div``;


export default function AppMonthAndYear () {
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

return <h1>{new Date().getDate()}</h1>
}