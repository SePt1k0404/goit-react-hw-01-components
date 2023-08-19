import styled from 'styled-components';

export const TableWrapper = styled.table`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const TableBody = styled.tbody`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
margin-top: 10px;
`;

export const TableTransactionDesc = styled.tr`
display: flex;
justify-content: space-between;
gap: 30px;
border: 1px solid #000;
width: 300px;
`;