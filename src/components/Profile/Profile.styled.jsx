import styled from 'styled-components';

export const Wrapper = styled.div`
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
padding-top: 0;
margin-top: 20px;
overflow: hidden;
`;

export const ProfileInfoWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 12px;
width: 100%;
border-bottom: 1px solid #000;
padding: 15px;
background-color: #e8d1d1;
`;

export const ImgAvatar = styled.img`
width: 150px;
`;

export const UserName = styled.p`
font-weight: bold;
font-size: 20px;
`;

export const ProfileTagAndLocation = styled.p`
color: #7a7a7a;
`;

export const UserStats = styled.ul`
display: flex;
gap: 20px;
`;

export const UserStatsItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 70px;
gap: 5px;
`;

export const UserStatsItemDescription = styled.span`
font-weight: bold;
font-size: 20px;
`;