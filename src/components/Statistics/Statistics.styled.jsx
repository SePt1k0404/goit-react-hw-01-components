import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 12px;
width: 350px;
margin-left: auto;
margin-right: auto;
border: 1px solid #000;
border-radius: 10px;
padding: 15px;
margin-top: 20px;
overflow: hidden;
`;

export const StatsList = styled.ul`
display: flex;
justify-content: center;
gap: 10px;
`;

export const StatsListItem = styled.li`
display: flex;
align-items: center;
height: 40px;
`;