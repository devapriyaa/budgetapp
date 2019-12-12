import React, { useState } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div``;
const PageTable = styled.table``;
const TableRow = styled.tr``;
const TableHeader = styled.th``;
const TableData = styled.td``;
const PageInput = styled.input``;
const PageButton = styled.button``;

export default function StartBudget() {
    const [field,setField] = useState([]);

    function addField(){
        var firstField = 'field-0-'+field.length;
        var secondField = 'field-1-'+field.length;
        var newArray = [firstField,secondField];
        setField(oldField => [...oldField, newArray]);      
    }
    return (
            <PageWrapper>
                <PageTable>
                    <TableRow>
                        <TableHeader>Catogory</TableHeader>
                        <TableHeader>Budget Amount</TableHeader>
                    </TableRow>
                    {field.map(category => 
                        <TableRow>
                            {category.map(fields => 
                                <TableData><PageInput value={fields}/></TableData>
                            )}                            
                        </TableRow> 
                    )}               
                    <TableRow>
                        <TableData>
                            <PageButton>Create Budget</PageButton>
                        </TableData>
                        <TableData>
                            <PageButton onClick={addField}>Create New Catogory</PageButton>
                        </TableData>
                    </TableRow>
                </PageTable>
            </PageWrapper>
    );
}